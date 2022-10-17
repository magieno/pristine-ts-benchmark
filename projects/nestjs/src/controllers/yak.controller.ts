import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class YakController {
    constructor() {
    }

    @Get("/yaks")
    public list() {
    }

    @Post("/yaks")
    public add(@Body() body: any) {
    }

    @Get("/yaks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/yaks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/yaks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/yaks/:id")
    public delete(@Param("id") id: string) {
    }
}
