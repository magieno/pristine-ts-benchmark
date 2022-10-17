import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BadgerController {
    constructor() {
    }

    @Get("/badgers")
    public list() {
    }

    @Post("/badgers")
    public add(@Body() body: any) {
    }

    @Get("/badgers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/badgers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/badgers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/badgers/:id")
    public delete(@Param("id") id: string) {
    }
}
