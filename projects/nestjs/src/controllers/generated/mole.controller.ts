import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MoleController {
    constructor() {
    }

    @Get("/moles")
    public list() {
    }

    @Post("/moles")
    public add(@Body() body: any) {
    }

    @Get("/moles/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/moles/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/moles/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/moles/:id")
    public delete(@Param("id") id: string) {
    }
}
