import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class JayController {
    constructor() {
    }

    @Get("/jays")
    public list() {
    }

    @Post("/jays")
    public add(@Body() body: any) {
    }

    @Get("/jays/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/jays/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/jays/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/jays/:id")
    public delete(@Param("id") id: string) {
    }
}
