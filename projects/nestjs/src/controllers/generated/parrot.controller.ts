import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ParrotController {
    constructor() {
    }

    @Get("/parrots")
    public list() {
    }

    @Post("/parrots")
    public add(@Body() body: any) {
    }

    @Get("/parrots/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/parrots/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/parrots/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/parrots/:id")
    public delete(@Param("id") id: string) {
    }
}
