import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class OwlController {
    constructor() {
    }

    @Get("/owls")
    public list() {
    }

    @Post("/owls")
    public add(@Body() body: any) {
    }

    @Get("/owls/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/owls/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/owls/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/owls/:id")
    public delete(@Param("id") id: string) {
    }
}
