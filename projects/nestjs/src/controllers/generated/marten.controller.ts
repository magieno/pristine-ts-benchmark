import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MartenController {
    constructor() {
    }

    @Get("/martens")
    public list() {
    }

    @Post("/martens")
    public add(@Body() body: any) {
    }

    @Get("/martens/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/martens/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/martens/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/martens/:id")
    public delete(@Param("id") id: string) {
    }
}
