import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HawkController {
    constructor() {
    }

    @Get("/hawks")
    public list() {
    }

    @Post("/hawks")
    public add(@Body() body: any) {
    }

    @Get("/hawks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/hawks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/hawks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/hawks/:id")
    public delete(@Param("id") id: string) {
    }
}
