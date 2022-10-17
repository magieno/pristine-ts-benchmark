import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class KoupreyController {
    constructor() {
    }

    @Get("/koupreys")
    public list() {
    }

    @Post("/koupreys")
    public add(@Body() body: any) {
    }

    @Get("/koupreys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/koupreys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/koupreys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/koupreys/:id")
    public delete(@Param("id") id: string) {
    }
}
