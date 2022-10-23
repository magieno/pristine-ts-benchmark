import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WeaselController {
    constructor() {
    }

    @Get("/weasels")
    public list() {
    }

    @Post("/weasels")
    public add(@Body() body: any) {
    }

    @Get("/weasels/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/weasels/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/weasels/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/weasels/:id")
    public delete(@Param("id") id: string) {
    }
}
