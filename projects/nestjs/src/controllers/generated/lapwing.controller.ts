import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LapwingController {
    constructor() {
    }

    @Get("/lapwings")
    public list() {
    }

    @Post("/lapwings")
    public add(@Body() body: any) {
    }

    @Get("/lapwings/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/lapwings/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/lapwings/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/lapwings/:id")
    public delete(@Param("id") id: string) {
    }
}
