import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WoodpeckerController {
    constructor() {
    }

    @Get("/woodpeckers")
    public list() {
    }

    @Post("/woodpeckers")
    public add(@Body() body: any) {
    }

    @Get("/woodpeckers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/woodpeckers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/woodpeckers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/woodpeckers/:id")
    public delete(@Param("id") id: string) {
    }
}
