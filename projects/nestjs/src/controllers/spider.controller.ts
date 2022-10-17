import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SpiderController {
    constructor() {
    }

    @Get("/spiders")
    public list() {
    }

    @Post("/spiders")
    public add(@Body() body: any) {
    }

    @Get("/spiders/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/spiders/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/spiders/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/spiders/:id")
    public delete(@Param("id") id: string) {
    }
}
