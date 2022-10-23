import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class StorkController {
    constructor() {
    }

    @Get("/storks")
    public list() {
    }

    @Post("/storks")
    public add(@Body() body: any) {
    }

    @Get("/storks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/storks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/storks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/storks/:id")
    public delete(@Param("id") id: string) {
    }
}
