import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BuffaloController {
    constructor() {
    }

    @Get("/buffalos")
    public list() {
    }

    @Post("/buffalos")
    public add(@Body() body: any) {
    }

    @Get("/buffalos/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/buffalos/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/buffalos/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/buffalos/:id")
    public delete(@Param("id") id: string) {
    }
}
