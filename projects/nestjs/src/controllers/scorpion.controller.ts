import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ScorpionController {
    constructor() {
    }

    @Get("/scorpions")
    public list() {
    }

    @Post("/scorpions")
    public add(@Body() body: any) {
    }

    @Get("/scorpions/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/scorpions/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/scorpions/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/scorpions/:id")
    public delete(@Param("id") id: string) {
    }
}
