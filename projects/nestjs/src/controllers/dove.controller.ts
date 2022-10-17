import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DoveController {
    constructor() {
    }

    @Get("/doves")
    public list() {
    }

    @Post("/doves")
    public add(@Body() body: any) {
    }

    @Get("/doves/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/doves/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/doves/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/doves/:id")
    public delete(@Param("id") id: string) {
    }
}
