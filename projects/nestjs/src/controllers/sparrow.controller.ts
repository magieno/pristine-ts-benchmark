import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SparrowController {
    constructor() {
    }

    @Get("/sparrows")
    public list() {
    }

    @Post("/sparrows")
    public add(@Body() body: any) {
    }

    @Get("/sparrows/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/sparrows/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/sparrows/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/sparrows/:id")
    public delete(@Param("id") id: string) {
    }
}
