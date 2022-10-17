import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WhaleController {
    constructor() {
    }

    @Get("/whales")
    public list() {
    }

    @Post("/whales")
    public add(@Body() body: any) {
    }

    @Get("/whales/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/whales/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/whales/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/whales/:id")
    public delete(@Param("id") id: string) {
    }
}
