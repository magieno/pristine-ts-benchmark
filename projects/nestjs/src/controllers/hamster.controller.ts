import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HamsterController {
    constructor() {
    }

    @Get("/hamsters")
    public list() {
    }

    @Post("/hamsters")
    public add(@Body() body: any) {
    }

    @Get("/hamsters/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/hamsters/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/hamsters/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/hamsters/:id")
    public delete(@Param("id") id: string) {
    }
}
