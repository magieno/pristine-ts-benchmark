import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ClamController {
    constructor() {
    }

    @Get("/clams")
    public list() {
    }

    @Post("/clams")
    public add(@Body() body: any) {
    }

    @Get("/clams/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/clams/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/clams/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/clams/:id")
    public delete(@Param("id") id: string) {
    }
}
