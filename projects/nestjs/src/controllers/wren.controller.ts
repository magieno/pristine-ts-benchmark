import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WrenController {
    constructor() {
    }

    @Get("/wrens")
    public list() {
    }

    @Post("/wrens")
    public add(@Body() body: any) {
    }

    @Get("/wrens/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/wrens/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/wrens/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/wrens/:id")
    public delete(@Param("id") id: string) {
    }
}
