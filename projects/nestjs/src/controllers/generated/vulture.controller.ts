import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class VultureController {
    constructor() {
    }

    @Get("/vultures")
    public list() {
    }

    @Post("/vultures")
    public add(@Body() body: any) {
    }

    @Get("/vultures/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/vultures/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/vultures/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/vultures/:id")
    public delete(@Param("id") id: string) {
    }
}
