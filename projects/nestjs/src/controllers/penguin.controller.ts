import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PenguinController {
    constructor() {
    }

    @Get("/penguins")
    public list() {
    }

    @Post("/penguins")
    public add(@Body() body: any) {
    }

    @Get("/penguins/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/penguins/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/penguins/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/penguins/:id")
    public delete(@Param("id") id: string) {
    }
}
