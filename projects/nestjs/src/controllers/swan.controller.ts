import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SwanController {
    constructor() {
    }

    @Get("/swans")
    public list() {
    }

    @Post("/swans")
    public add(@Body() body: any) {
    }

    @Get("/swans/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/swans/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/swans/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/swans/:id")
    public delete(@Param("id") id: string) {
    }
}
