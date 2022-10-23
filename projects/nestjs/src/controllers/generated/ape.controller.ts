import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ApeController {
    constructor() {
    }

    @Get("/apes")
    public list() {
    }

    @Post("/apes")
    public add(@Body() body: any) {
    }

    @Get("/apes/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/apes/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/apes/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/apes/:id")
    public delete(@Param("id") id: string) {
    }
}
