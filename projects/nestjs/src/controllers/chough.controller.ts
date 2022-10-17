import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ChoughController {
    constructor() {
    }

    @Get("/choughs")
    public list() {
    }

    @Post("/choughs")
    public add(@Body() body: any) {
    }

    @Get("/choughs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/choughs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/choughs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/choughs/:id")
    public delete(@Param("id") id: string) {
    }
}
