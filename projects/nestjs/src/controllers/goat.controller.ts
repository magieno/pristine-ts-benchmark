import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GoatController {
    constructor() {
    }

    @Get("/goats")
    public list() {
    }

    @Post("/goats")
    public add(@Body() body: any) {
    }

    @Get("/goats/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/goats/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/goats/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/goats/:id")
    public delete(@Param("id") id: string) {
    }
}
