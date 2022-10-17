import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ChamoisController {
    constructor() {
    }

    @Get("/chamoiss")
    public list() {
    }

    @Post("/chamoiss")
    public add(@Body() body: any) {
    }

    @Get("/chamoiss/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/chamoiss/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/chamoiss/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/chamoiss/:id")
    public delete(@Param("id") id: string) {
    }
}
