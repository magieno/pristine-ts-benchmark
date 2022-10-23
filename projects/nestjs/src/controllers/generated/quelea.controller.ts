import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class QueleaController {
    constructor() {
    }

    @Get("/queleas")
    public list() {
    }

    @Post("/queleas")
    public add(@Body() body: any) {
    }

    @Get("/queleas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/queleas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/queleas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/queleas/:id")
    public delete(@Param("id") id: string) {
    }
}
