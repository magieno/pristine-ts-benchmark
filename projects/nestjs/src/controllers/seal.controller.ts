import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SealController {
    constructor() {
    }

    @Get("/seals")
    public list() {
    }

    @Post("/seals")
    public add(@Body() body: any) {
    }

    @Get("/seals/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/seals/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/seals/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/seals/:id")
    public delete(@Param("id") id: string) {
    }
}
