import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BearController {
    constructor() {
    }

    @Get("/bears")
    public list() {
    }

    @Post("/bears")
    public add(@Body() body: any) {
    }

    @Get("/bears/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/bears/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/bears/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/bears/:id")
    public delete(@Param("id") id: string) {
    }
}
