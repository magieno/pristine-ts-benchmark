import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GerbilController {
    constructor() {
    }

    @Get("/gerbils")
    public list() {
    }

    @Post("/gerbils")
    public add(@Body() body: any) {
    }

    @Get("/gerbils/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/gerbils/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/gerbils/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/gerbils/:id")
    public delete(@Param("id") id: string) {
    }
}
