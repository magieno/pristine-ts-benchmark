import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MantisController {
    constructor() {
    }

    @Get("/mantiss")
    public list() {
    }

    @Post("/mantiss")
    public add(@Body() body: any) {
    }

    @Get("/mantiss/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/mantiss/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/mantiss/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/mantiss/:id")
    public delete(@Param("id") id: string) {
    }
}
