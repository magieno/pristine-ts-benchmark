import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DolphinController {
    constructor() {
    }

    @Get("/dolphins")
    public list() {
    }

    @Post("/dolphins")
    public add(@Body() body: any) {
    }

    @Get("/dolphins/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/dolphins/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/dolphins/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/dolphins/:id")
    public delete(@Param("id") id: string) {
    }
}
