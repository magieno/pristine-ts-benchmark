import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SalamanderController {
    constructor() {
    }

    @Get("/salamanders")
    public list() {
    }

    @Post("/salamanders")
    public add(@Body() body: any) {
    }

    @Get("/salamanders/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/salamanders/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/salamanders/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/salamanders/:id")
    public delete(@Param("id") id: string) {
    }
}
