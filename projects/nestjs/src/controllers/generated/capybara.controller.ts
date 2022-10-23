import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CapybaraController {
    constructor() {
    }

    @Get("/capybaras")
    public list() {
    }

    @Post("/capybaras")
    public add(@Body() body: any) {
    }

    @Get("/capybaras/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/capybaras/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/capybaras/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/capybaras/:id")
    public delete(@Param("id") id: string) {
    }
}
