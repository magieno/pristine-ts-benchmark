import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class NightingaleController {
    constructor() {
    }

    @Get("/nightingales")
    public list() {
    }

    @Post("/nightingales")
    public add(@Body() body: any) {
    }

    @Get("/nightingales/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/nightingales/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/nightingales/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/nightingales/:id")
    public delete(@Param("id") id: string) {
    }
}
