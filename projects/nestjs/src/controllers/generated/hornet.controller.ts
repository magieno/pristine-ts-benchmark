import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HornetController {
    constructor() {
    }

    @Get("/hornets")
    public list() {
    }

    @Post("/hornets")
    public add(@Body() body: any) {
    }

    @Get("/hornets/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/hornets/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/hornets/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/hornets/:id")
    public delete(@Param("id") id: string) {
    }
}
