import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class OryxController {
    constructor() {
    }

    @Get("/oryxs")
    public list() {
    }

    @Post("/oryxs")
    public add(@Body() body: any) {
    }

    @Get("/oryxs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/oryxs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/oryxs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/oryxs/:id")
    public delete(@Param("id") id: string) {
    }
}
