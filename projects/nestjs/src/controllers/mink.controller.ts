import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MinkController {
    constructor() {
    }

    @Get("/minks")
    public list() {
    }

    @Post("/minks")
    public add(@Body() body: any) {
    }

    @Get("/minks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/minks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/minks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/minks/:id")
    public delete(@Param("id") id: string) {
    }
}
