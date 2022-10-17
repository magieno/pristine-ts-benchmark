import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class EagleController {
    constructor() {
    }

    @Get("/eagles")
    public list() {
    }

    @Post("/eagles")
    public add(@Body() body: any) {
    }

    @Get("/eagles/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/eagles/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/eagles/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/eagles/:id")
    public delete(@Param("id") id: string) {
    }
}
