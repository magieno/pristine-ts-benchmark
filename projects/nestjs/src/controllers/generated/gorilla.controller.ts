import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GorillaController {
    constructor() {
    }

    @Get("/gorillas")
    public list() {
    }

    @Post("/gorillas")
    public add(@Body() body: any) {
    }

    @Get("/gorillas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/gorillas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/gorillas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/gorillas/:id")
    public delete(@Param("id") id: string) {
    }
}
