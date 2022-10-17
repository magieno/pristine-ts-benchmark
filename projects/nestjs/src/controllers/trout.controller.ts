import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class TroutController {
    constructor() {
    }

    @Get("/trouts")
    public list() {
    }

    @Post("/trouts")
    public add(@Body() body: any) {
    }

    @Get("/trouts/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/trouts/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/trouts/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/trouts/:id")
    public delete(@Param("id") id: string) {
    }
}
