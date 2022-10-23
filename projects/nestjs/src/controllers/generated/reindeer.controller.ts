import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ReindeerController {
    constructor() {
    }

    @Get("/reindeers")
    public list() {
    }

    @Post("/reindeers")
    public add(@Body() body: any) {
    }

    @Get("/reindeers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/reindeers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/reindeers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/reindeers/:id")
    public delete(@Param("id") id: string) {
    }
}
