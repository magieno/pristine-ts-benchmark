import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PantherController {
    constructor() {
    }

    @Get("/panthers")
    public list() {
    }

    @Post("/panthers")
    public add(@Body() body: any) {
    }

    @Get("/panthers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/panthers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/panthers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/panthers/:id")
    public delete(@Param("id") id: string) {
    }
}
