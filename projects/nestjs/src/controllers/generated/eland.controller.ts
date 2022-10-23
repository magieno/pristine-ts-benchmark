import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ElandController {
    constructor() {
    }

    @Get("/elands")
    public list() {
    }

    @Post("/elands")
    public add(@Body() body: any) {
    }

    @Get("/elands/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/elands/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/elands/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/elands/:id")
    public delete(@Param("id") id: string) {
    }
}
