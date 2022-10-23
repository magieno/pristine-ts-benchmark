import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CobraController {
    constructor() {
    }

    @Get("/cobras")
    public list() {
    }

    @Post("/cobras")
    public add(@Body() body: any) {
    }

    @Get("/cobras/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cobras/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cobras/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cobras/:id")
    public delete(@Param("id") id: string) {
    }
}
