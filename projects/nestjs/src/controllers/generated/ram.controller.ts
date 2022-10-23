import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class RamController {
    constructor() {
    }

    @Get("/rams")
    public list() {
    }

    @Post("/rams")
    public add(@Body() body: any) {
    }

    @Get("/rams/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/rams/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/rams/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/rams/:id")
    public delete(@Param("id") id: string) {
    }
}
