import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WildcatController {
    constructor() {
    }

    @Get("/wildcats")
    public list() {
    }

    @Post("/wildcats")
    public add(@Body() body: any) {
    }

    @Get("/wildcats/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/wildcats/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/wildcats/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/wildcats/:id")
    public delete(@Param("id") id: string) {
    }
}
