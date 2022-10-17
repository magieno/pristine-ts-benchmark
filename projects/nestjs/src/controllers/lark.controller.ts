import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LarkController {
    constructor() {
    }

    @Get("/larks")
    public list() {
    }

    @Post("/larks")
    public add(@Body() body: any) {
    }

    @Get("/larks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/larks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/larks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/larks/:id")
    public delete(@Param("id") id: string) {
    }
}
