import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class RailController {
    constructor() {
    }

    @Get("/rails")
    public list() {
    }

    @Post("/rails")
    public add(@Body() body: any) {
    }

    @Get("/rails/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/rails/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/rails/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/rails/:id")
    public delete(@Param("id") id: string) {
    }
}
