import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class TermiteController {
    constructor() {
    }

    @Get("/termites")
    public list() {
    }

    @Post("/termites")
    public add(@Body() body: any) {
    }

    @Get("/termites/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/termites/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/termites/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/termites/:id")
    public delete(@Param("id") id: string) {
    }
}
