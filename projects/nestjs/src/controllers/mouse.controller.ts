import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MouseController {
    constructor() {
    }

    @Get("/mouses")
    public list() {
    }

    @Post("/mouses")
    public add(@Body() body: any) {
    }

    @Get("/mouses/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/mouses/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/mouses/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/mouses/:id")
    public delete(@Param("id") id: string) {
    }
}
