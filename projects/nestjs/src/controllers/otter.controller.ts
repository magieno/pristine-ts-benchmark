import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class OtterController {
    constructor() {
    }

    @Get("/otters")
    public list() {
    }

    @Post("/otters")
    public add(@Body() body: any) {
    }

    @Get("/otters/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/otters/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/otters/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/otters/:id")
    public delete(@Param("id") id: string) {
    }
}
