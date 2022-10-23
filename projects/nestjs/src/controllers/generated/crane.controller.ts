import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CraneController {
    constructor() {
    }

    @Get("/cranes")
    public list() {
    }

    @Post("/cranes")
    public add(@Body() body: any) {
    }

    @Get("/cranes/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cranes/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cranes/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cranes/:id")
    public delete(@Param("id") id: string) {
    }
}
