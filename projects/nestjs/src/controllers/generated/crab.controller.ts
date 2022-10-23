import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CrabController {
    constructor() {
    }

    @Get("/crabs")
    public list() {
    }

    @Post("/crabs")
    public add(@Body() body: any) {
    }

    @Get("/crabs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/crabs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/crabs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/crabs/:id")
    public delete(@Param("id") id: string) {
    }
}
