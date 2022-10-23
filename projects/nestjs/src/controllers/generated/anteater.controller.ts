import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class AnteaterController {
    constructor() {
    }

    @Get("/anteaters")
    public list() {
    }

    @Post("/anteaters")
    public add(@Body() body: any) {
    }

    @Get("/anteaters/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/anteaters/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/anteaters/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/anteaters/:id")
    public delete(@Param("id") id: string) {
    }
}
