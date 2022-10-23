import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GiraffeController {
    constructor() {
    }

    @Get("/giraffes")
    public list() {
    }

    @Post("/giraffes")
    public add(@Body() body: any) {
    }

    @Get("/giraffes/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/giraffes/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/giraffes/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/giraffes/:id")
    public delete(@Param("id") id: string) {
    }
}
