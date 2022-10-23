import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class OysterController {
    constructor() {
    }

    @Get("/oysters")
    public list() {
    }

    @Post("/oysters")
    public add(@Body() body: any) {
    }

    @Get("/oysters/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/oysters/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/oysters/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/oysters/:id")
    public delete(@Param("id") id: string) {
    }
}
