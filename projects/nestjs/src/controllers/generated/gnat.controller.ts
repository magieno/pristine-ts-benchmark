import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GnatController {
    constructor() {
    }

    @Get("/gnats")
    public list() {
    }

    @Post("/gnats")
    public add(@Body() body: any) {
    }

    @Get("/gnats/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/gnats/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/gnats/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/gnats/:id")
    public delete(@Param("id") id: string) {
    }
}
