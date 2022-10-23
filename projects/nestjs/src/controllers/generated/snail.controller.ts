import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SnailController {
    constructor() {
    }

    @Get("/snails")
    public list() {
    }

    @Post("/snails")
    public add(@Body() body: any) {
    }

    @Get("/snails/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/snails/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/snails/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/snails/:id")
    public delete(@Param("id") id: string) {
    }
}
