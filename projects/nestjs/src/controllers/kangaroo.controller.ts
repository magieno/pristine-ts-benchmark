import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class KangarooController {
    constructor() {
    }

    @Get("/kangaroos")
    public list() {
    }

    @Post("/kangaroos")
    public add(@Body() body: any) {
    }

    @Get("/kangaroos/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/kangaroos/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/kangaroos/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/kangaroos/:id")
    public delete(@Param("id") id: string) {
    }
}
