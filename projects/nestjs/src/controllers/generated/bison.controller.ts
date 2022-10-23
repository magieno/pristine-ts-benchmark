import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BisonController {
    constructor() {
    }

    @Get("/bisons")
    public list() {
    }

    @Post("/bisons")
    public add(@Body() body: any) {
    }

    @Get("/bisons/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/bisons/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/bisons/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/bisons/:id")
    public delete(@Param("id") id: string) {
    }
}
