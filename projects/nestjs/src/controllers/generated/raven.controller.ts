import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class RavenController {
    constructor() {
    }

    @Get("/ravens")
    public list() {
    }

    @Post("/ravens")
    public add(@Body() body: any) {
    }

    @Get("/ravens/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/ravens/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/ravens/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/ravens/:id")
    public delete(@Param("id") id: string) {
    }
}
