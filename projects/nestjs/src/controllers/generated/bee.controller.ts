import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BeeController {
    constructor() {
    }

    @Get("/bees")
    public list() {
    }

    @Post("/bees")
    public add(@Body() body: any) {
    }

    @Get("/bees/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/bees/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/bees/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/bees/:id")
    public delete(@Param("id") id: string) {
    }
}
