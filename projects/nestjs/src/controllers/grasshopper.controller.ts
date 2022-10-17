import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GrasshopperController {
    constructor() {
    }

    @Get("/grasshoppers")
    public list() {
    }

    @Post("/grasshoppers")
    public add(@Body() body: any) {
    }

    @Get("/grasshoppers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/grasshoppers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/grasshoppers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/grasshoppers/:id")
    public delete(@Param("id") id: string) {
    }
}
