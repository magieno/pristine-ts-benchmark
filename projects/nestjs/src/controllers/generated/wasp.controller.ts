import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WaspController {
    constructor() {
    }

    @Get("/wasps")
    public list() {
    }

    @Post("/wasps")
    public add(@Body() body: any) {
    }

    @Get("/wasps/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/wasps/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/wasps/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/wasps/:id")
    public delete(@Param("id") id: string) {
    }
}
