import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ElkController {
    constructor() {
    }

    @Get("/elks")
    public list() {
    }

    @Post("/elks")
    public add(@Body() body: any) {
    }

    @Get("/elks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/elks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/elks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/elks/:id")
    public delete(@Param("id") id: string) {
    }
}
