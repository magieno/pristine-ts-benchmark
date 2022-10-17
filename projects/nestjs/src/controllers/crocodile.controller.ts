import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CrocodileController {
    constructor() {
    }

    @Get("/crocodiles")
    public list() {
    }

    @Post("/crocodiles")
    public add(@Body() body: any) {
    }

    @Get("/crocodiles/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/crocodiles/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/crocodiles/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/crocodiles/:id")
    public delete(@Param("id") id: string) {
    }
}
