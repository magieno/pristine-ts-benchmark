import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HedgehogController {
    constructor() {
    }

    @Get("/hedgehogs")
    public list() {
    }

    @Post("/hedgehogs")
    public add(@Body() body: any) {
    }

    @Get("/hedgehogs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/hedgehogs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/hedgehogs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/hedgehogs/:id")
    public delete(@Param("id") id: string) {
    }
}
