import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class RabbitController {
    constructor() {
    }

    @Get("/rabbits")
    public list() {
    }

    @Post("/rabbits")
    public add(@Body() body: any) {
    }

    @Get("/rabbits/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/rabbits/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/rabbits/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/rabbits/:id")
    public delete(@Param("id") id: string) {
    }
}
