import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class JellyfishController {
    constructor() {
    }

    @Get("/jellyfishs")
    public list() {
    }

    @Post("/jellyfishs")
    public add(@Body() body: any) {
    }

    @Get("/jellyfishs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/jellyfishs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/jellyfishs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/jellyfishs/:id")
    public delete(@Param("id") id: string) {
    }
}
