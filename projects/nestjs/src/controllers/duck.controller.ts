import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DuckController {
    constructor() {
    }

    @Get("/ducks")
    public list() {
    }

    @Post("/ducks")
    public add(@Body() body: any) {
    }

    @Get("/ducks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/ducks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/ducks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/ducks/:id")
    public delete(@Param("id") id: string) {
    }
}
