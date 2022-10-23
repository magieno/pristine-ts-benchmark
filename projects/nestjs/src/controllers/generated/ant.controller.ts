import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class AntController {
    constructor() {
    }

    @Get("/ants")
    public list() {
    }

    @Post("/ants")
    public add(@Body() body: any) {
    }

    @Get("/ants/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/ants/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/ants/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/ants/:id")
    public delete(@Param("id") id: string) {
    }
}
