import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MuleController {
    constructor() {
    }

    @Get("/mules")
    public list() {
    }

    @Post("/mules")
    public add(@Body() body: any) {
    }

    @Get("/mules/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/mules/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/mules/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/mules/:id")
    public delete(@Param("id") id: string) {
    }
}
