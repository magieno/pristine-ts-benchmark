import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PonyController {
    constructor() {
    }

    @Get("/ponys")
    public list() {
    }

    @Post("/ponys")
    public add(@Body() body: any) {
    }

    @Get("/ponys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/ponys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/ponys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/ponys/:id")
    public delete(@Param("id") id: string) {
    }
}
