import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PartridgeController {
    constructor() {
    }

    @Get("/partridges")
    public list() {
    }

    @Post("/partridges")
    public add(@Body() body: any) {
    }

    @Get("/partridges/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/partridges/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/partridges/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/partridges/:id")
    public delete(@Param("id") id: string) {
    }
}
