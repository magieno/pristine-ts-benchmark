import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class NarwhalController {
    constructor() {
    }

    @Get("/narwhals")
    public list() {
    }

    @Post("/narwhals")
    public add(@Body() body: any) {
    }

    @Get("/narwhals/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/narwhals/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/narwhals/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/narwhals/:id")
    public delete(@Param("id") id: string) {
    }
}
