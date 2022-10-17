import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BaboonController {
    constructor() {
    }

    @Get("/baboons")
    public list() {
    }

    @Post("/baboons")
    public add(@Body() body: any) {
    }

    @Get("/baboons/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/baboons/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/baboons/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/baboons/:id")
    public delete(@Param("id") id: string) {
    }
}
