import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ToadController {
    constructor() {
    }

    @Get("/toads")
    public list() {
    }

    @Post("/toads")
    public add(@Body() body: any) {
    }

    @Get("/toads/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/toads/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/toads/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/toads/:id")
    public delete(@Param("id") id: string) {
    }
}
