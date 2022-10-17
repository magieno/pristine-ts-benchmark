import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class AlbatrossController {
    constructor() {
    }

    @Get("/albatrosss")
    public list() {
    }

    @Post("/albatrosss")
    public add(@Body() body: any) {
    }

    @Get("/albatrosss/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/albatrosss/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/albatrosss/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/albatrosss/:id")
    public delete(@Param("id") id: string) {
    }
}
