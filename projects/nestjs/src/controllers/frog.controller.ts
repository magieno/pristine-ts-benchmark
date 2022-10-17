import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class FrogController {
    constructor() {
    }

    @Get("/frogs")
    public list() {
    }

    @Post("/frogs")
    public add(@Body() body: any) {
    }

    @Get("/frogs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/frogs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/frogs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/frogs/:id")
    public delete(@Param("id") id: string) {
    }
}
