import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LyrebirdController {
    constructor() {
    }

    @Get("/lyrebirds")
    public list() {
    }

    @Post("/lyrebirds")
    public add(@Body() body: any) {
    }

    @Get("/lyrebirds/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/lyrebirds/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/lyrebirds/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/lyrebirds/:id")
    public delete(@Param("id") id: string) {
    }
}
