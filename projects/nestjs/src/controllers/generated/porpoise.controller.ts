import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PorpoiseController {
    constructor() {
    }

    @Get("/porpoises")
    public list() {
    }

    @Post("/porpoises")
    public add(@Body() body: any) {
    }

    @Get("/porpoises/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/porpoises/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/porpoises/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/porpoises/:id")
    public delete(@Param("id") id: string) {
    }
}
