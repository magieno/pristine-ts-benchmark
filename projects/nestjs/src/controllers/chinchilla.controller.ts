import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ChinchillaController {
    constructor() {
    }

    @Get("/chinchillas")
    public list() {
    }

    @Post("/chinchillas")
    public add(@Body() body: any) {
    }

    @Get("/chinchillas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/chinchillas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/chinchillas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/chinchillas/:id")
    public delete(@Param("id") id: string) {
    }
}
