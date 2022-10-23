import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LlamaController {
    constructor() {
    }

    @Get("/llamas")
    public list() {
    }

    @Post("/llamas")
    public add(@Body() body: any) {
    }

    @Get("/llamas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/llamas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/llamas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/llamas/:id")
    public delete(@Param("id") id: string) {
    }
}
