import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CaterpillarController {
    constructor() {
    }

    @Get("/caterpillars")
    public list() {
    }

    @Post("/caterpillars")
    public add(@Body() body: any) {
    }

    @Get("/caterpillars/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/caterpillars/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/caterpillars/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/caterpillars/:id")
    public delete(@Param("id") id: string) {
    }
}
