import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MonkeyController {
    constructor() {
    }

    @Get("/monkeys")
    public list() {
    }

    @Post("/monkeys")
    public add(@Body() body: any) {
    }

    @Get("/monkeys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/monkeys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/monkeys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/monkeys/:id")
    public delete(@Param("id") id: string) {
    }
}
