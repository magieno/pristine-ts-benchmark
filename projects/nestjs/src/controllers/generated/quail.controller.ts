import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class QuailController {
    constructor() {
    }

    @Get("/quails")
    public list() {
    }

    @Post("/quails")
    public add(@Body() body: any) {
    }

    @Get("/quails/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/quails/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/quails/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/quails/:id")
    public delete(@Param("id") id: string) {
    }
}
