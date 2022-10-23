import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HorseController {
    constructor() {
    }

    @Get("/horses")
    public list() {
    }

    @Post("/horses")
    public add(@Body() body: any) {
    }

    @Get("/horses/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/horses/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/horses/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/horses/:id")
    public delete(@Param("id") id: string) {
    }
}
