import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SardineController {
    constructor() {
    }

    @Get("/sardines")
    public list() {
    }

    @Post("/sardines")
    public add(@Body() body: any) {
    }

    @Get("/sardines/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/sardines/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/sardines/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/sardines/:id")
    public delete(@Param("id") id: string) {
    }
}
