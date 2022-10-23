import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class TigerController {
    constructor() {
    }

    @Get("/tigers")
    public list() {
    }

    @Post("/tigers")
    public add(@Body() body: any) {
    }

    @Get("/tigers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/tigers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/tigers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/tigers/:id")
    public delete(@Param("id") id: string) {
    }
}
