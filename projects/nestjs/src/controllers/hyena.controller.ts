import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HyenaController {
    constructor() {
    }

    @Get("/hyenas")
    public list() {
    }

    @Post("/hyenas")
    public add(@Body() body: any) {
    }

    @Get("/hyenas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/hyenas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/hyenas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/hyenas/:id")
    public delete(@Param("id") id: string) {
    }
}
