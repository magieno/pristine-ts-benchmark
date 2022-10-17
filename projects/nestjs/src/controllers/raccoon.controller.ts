import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class RaccoonController {
    constructor() {
    }

    @Get("/raccoons")
    public list() {
    }

    @Post("/raccoons")
    public add(@Body() body: any) {
    }

    @Get("/raccoons/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/raccoons/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/raccoons/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/raccoons/:id")
    public delete(@Param("id") id: string) {
    }
}
