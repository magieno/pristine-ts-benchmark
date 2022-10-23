import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GoldfishController {
    constructor() {
    }

    @Get("/goldfishs")
    public list() {
    }

    @Post("/goldfishs")
    public add(@Body() body: any) {
    }

    @Get("/goldfishs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/goldfishs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/goldfishs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/goldfishs/:id")
    public delete(@Param("id") id: string) {
    }
}
