import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SwallowController {
    constructor() {
    }

    @Get("/swallows")
    public list() {
    }

    @Post("/swallows")
    public add(@Body() body: any) {
    }

    @Get("/swallows/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/swallows/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/swallows/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/swallows/:id")
    public delete(@Param("id") id: string) {
    }
}
