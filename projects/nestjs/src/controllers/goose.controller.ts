import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GooseController {
    constructor() {
    }

    @Get("/gooses")
    public list() {
    }

    @Post("/gooses")
    public add(@Body() body: any) {
    }

    @Get("/gooses/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/gooses/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/gooses/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/gooses/:id")
    public delete(@Param("id") id: string) {
    }
}
