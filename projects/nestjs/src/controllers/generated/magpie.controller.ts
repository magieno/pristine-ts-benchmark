import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MagpieController {
    constructor() {
    }

    @Get("/magpies")
    public list() {
    }

    @Post("/magpies")
    public add(@Body() body: any) {
    }

    @Get("/magpies/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/magpies/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/magpies/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/magpies/:id")
    public delete(@Param("id") id: string) {
    }
}
