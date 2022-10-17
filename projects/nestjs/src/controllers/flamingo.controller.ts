import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class FlamingoController {
    constructor() {
    }

    @Get("/flamingos")
    public list() {
    }

    @Post("/flamingos")
    public add(@Body() body: any) {
    }

    @Get("/flamingos/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/flamingos/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/flamingos/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/flamingos/:id")
    public delete(@Param("id") id: string) {
    }
}
