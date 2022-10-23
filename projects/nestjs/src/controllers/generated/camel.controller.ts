import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CamelController {
    constructor() {
    }

    @Get("/camels")
    public list() {
    }

    @Post("/camels")
    public add(@Body() body: any) {
    }

    @Get("/camels/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/camels/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/camels/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/camels/:id")
    public delete(@Param("id") id: string) {
    }
}
