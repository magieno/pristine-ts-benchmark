import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GoldfinchController {
    constructor() {
    }

    @Get("/goldfinchs")
    public list() {
    }

    @Post("/goldfinchs")
    public add(@Body() body: any) {
    }

    @Get("/goldfinchs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/goldfinchs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/goldfinchs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/goldfinchs/:id")
    public delete(@Param("id") id: string) {
    }
}
