import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class StingrayController {
    constructor() {
    }

    @Get("/stingrays")
    public list() {
    }

    @Post("/stingrays")
    public add(@Body() body: any) {
    }

    @Get("/stingrays/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/stingrays/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/stingrays/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/stingrays/:id")
    public delete(@Param("id") id: string) {
    }
}
