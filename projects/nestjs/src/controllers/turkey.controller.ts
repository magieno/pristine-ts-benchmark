import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class TurkeyController {
    constructor() {
    }

    @Get("/turkeys")
    public list() {
    }

    @Post("/turkeys")
    public add(@Body() body: any) {
    }

    @Get("/turkeys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/turkeys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/turkeys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/turkeys/:id")
    public delete(@Param("id") id: string) {
    }
}
