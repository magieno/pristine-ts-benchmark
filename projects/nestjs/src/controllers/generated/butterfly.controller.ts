import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ButterflyController {
    constructor() {
    }

    @Get("/butterflys")
    public list() {
    }

    @Post("/butterflys")
    public add(@Body() body: any) {
    }

    @Get("/butterflys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/butterflys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/butterflys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/butterflys/:id")
    public delete(@Param("id") id: string) {
    }
}
