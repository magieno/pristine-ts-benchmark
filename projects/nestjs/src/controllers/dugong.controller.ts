import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DugongController {
    constructor() {
    }

    @Get("/dugongs")
    public list() {
    }

    @Post("/dugongs")
    public add(@Body() body: any) {
    }

    @Get("/dugongs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/dugongs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/dugongs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/dugongs/:id")
    public delete(@Param("id") id: string) {
    }
}
