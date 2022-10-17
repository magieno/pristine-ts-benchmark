import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DragonflyController {
    constructor() {
    }

    @Get("/dragonflys")
    public list() {
    }

    @Post("/dragonflys")
    public add(@Body() body: any) {
    }

    @Get("/dragonflys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/dragonflys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/dragonflys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/dragonflys/:id")
    public delete(@Param("id") id: string) {
    }
}
