import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LeopardController {
    constructor() {
    }

    @Get("/leopards")
    public list() {
    }

    @Post("/leopards")
    public add(@Body() body: any) {
    }

    @Get("/leopards/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/leopards/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/leopards/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/leopards/:id")
    public delete(@Param("id") id: string) {
    }
}
