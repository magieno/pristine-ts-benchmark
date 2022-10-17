import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SnakeController {
    constructor() {
    }

    @Get("/snakes")
    public list() {
    }

    @Post("/snakes")
    public add(@Body() body: any) {
    }

    @Get("/snakes/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/snakes/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/snakes/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/snakes/:id")
    public delete(@Param("id") id: string) {
    }
}
