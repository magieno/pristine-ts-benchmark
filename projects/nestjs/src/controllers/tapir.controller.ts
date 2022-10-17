import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class TapirController {
    constructor() {
    }

    @Get("/tapirs")
    public list() {
    }

    @Post("/tapirs")
    public add(@Body() body: any) {
    }

    @Get("/tapirs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/tapirs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/tapirs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/tapirs/:id")
    public delete(@Param("id") id: string) {
    }
}
