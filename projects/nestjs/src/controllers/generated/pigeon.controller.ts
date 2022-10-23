import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PigeonController {
    constructor() {
    }

    @Get("/pigeons")
    public list() {
    }

    @Post("/pigeons")
    public add(@Body() body: any) {
    }

    @Get("/pigeons/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/pigeons/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/pigeons/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/pigeons/:id")
    public delete(@Param("id") id: string) {
    }
}
