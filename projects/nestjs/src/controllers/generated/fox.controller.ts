import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class FoxController {
    constructor() {
    }

    @Get("/foxs")
    public list() {
    }

    @Post("/foxs")
    public add(@Body() body: any) {
    }

    @Get("/foxs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/foxs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/foxs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/foxs/:id")
    public delete(@Param("id") id: string) {
    }
}
