import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GoshawkController {
    constructor() {
    }

    @Get("/goshawks")
    public list() {
    }

    @Post("/goshawks")
    public add(@Body() body: any) {
    }

    @Get("/goshawks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/goshawks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/goshawks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/goshawks/:id")
    public delete(@Param("id") id: string) {
    }
}
