import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GullController {
    constructor() {
    }

    @Get("/gulls")
    public list() {
    }

    @Post("/gulls")
    public add(@Body() body: any) {
    }

    @Get("/gulls/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/gulls/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/gulls/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/gulls/:id")
    public delete(@Param("id") id: string) {
    }
}
