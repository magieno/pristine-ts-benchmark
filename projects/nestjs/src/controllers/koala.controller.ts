import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class KoalaController {
    constructor() {
    }

    @Get("/koalas")
    public list() {
    }

    @Post("/koalas")
    public add(@Body() body: any) {
    }

    @Get("/koalas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/koalas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/koalas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/koalas/:id")
    public delete(@Param("id") id: string) {
    }
}
