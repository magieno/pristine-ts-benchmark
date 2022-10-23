import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LionController {
    constructor() {
    }

    @Get("/lions")
    public list() {
    }

    @Post("/lions")
    public add(@Body() body: any) {
    }

    @Get("/lions/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/lions/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/lions/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/lions/:id")
    public delete(@Param("id") id: string) {
    }
}
