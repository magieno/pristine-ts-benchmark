import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DotterelController {
    constructor() {
    }

    @Get("/dotterels")
    public list() {
    }

    @Post("/dotterels")
    public add(@Body() body: any) {
    }

    @Get("/dotterels/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/dotterels/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/dotterels/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/dotterels/:id")
    public delete(@Param("id") id: string) {
    }
}
