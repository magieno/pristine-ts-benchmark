import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class StinkbugController {
    constructor() {
    }

    @Get("/stinkbugs")
    public list() {
    }

    @Post("/stinkbugs")
    public add(@Body() body: any) {
    }

    @Get("/stinkbugs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/stinkbugs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/stinkbugs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/stinkbugs/:id")
    public delete(@Param("id") id: string) {
    }
}
