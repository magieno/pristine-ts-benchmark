import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class FlyController {
    constructor() {
    }

    @Get("/flys")
    public list() {
    }

    @Post("/flys")
    public add(@Body() body: any) {
    }

    @Get("/flys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/flys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/flys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/flys/:id")
    public delete(@Param("id") id: string) {
    }
}
