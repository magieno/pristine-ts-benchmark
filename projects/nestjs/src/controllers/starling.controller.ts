import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class StarlingController {
    constructor() {
    }

    @Get("/starlings")
    public list() {
    }

    @Post("/starlings")
    public add(@Body() body: any) {
    }

    @Get("/starlings/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/starlings/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/starlings/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/starlings/:id")
    public delete(@Param("id") id: string) {
    }
}
