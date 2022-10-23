import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class RatController {
    constructor() {
    }

    @Get("/rats")
    public list() {
    }

    @Post("/rats")
    public add(@Body() body: any) {
    }

    @Get("/rats/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/rats/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/rats/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/rats/:id")
    public delete(@Param("id") id: string) {
    }
}
