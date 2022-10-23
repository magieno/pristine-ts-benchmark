import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class EchidnaController {
    constructor() {
    }

    @Get("/echidnas")
    public list() {
    }

    @Post("/echidnas")
    public add(@Body() body: any) {
    }

    @Get("/echidnas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/echidnas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/echidnas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/echidnas/:id")
    public delete(@Param("id") id: string) {
    }
}
