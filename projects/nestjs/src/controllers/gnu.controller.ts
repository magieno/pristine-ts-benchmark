import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GnuController {
    constructor() {
    }

    @Get("/gnus")
    public list() {
    }

    @Post("/gnus")
    public add(@Body() body: any) {
    }

    @Get("/gnus/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/gnus/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/gnus/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/gnus/:id")
    public delete(@Param("id") id: string) {
    }
}
