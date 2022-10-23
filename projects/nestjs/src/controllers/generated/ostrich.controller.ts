import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class OstrichController {
    constructor() {
    }

    @Get("/ostrichs")
    public list() {
    }

    @Post("/ostrichs")
    public add(@Body() body: any) {
    }

    @Get("/ostrichs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/ostrichs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/ostrichs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/ostrichs/:id")
    public delete(@Param("id") id: string) {
    }
}
