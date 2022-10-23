import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class JackalController {
    constructor() {
    }

    @Get("/jackals")
    public list() {
    }

    @Post("/jackals")
    public add(@Body() body: any) {
    }

    @Get("/jackals/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/jackals/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/jackals/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/jackals/:id")
    public delete(@Param("id") id: string) {
    }
}
