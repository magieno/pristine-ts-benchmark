import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CrowController {
    constructor() {
    }

    @Get("/crows")
    public list() {
    }

    @Post("/crows")
    public add(@Body() body: any) {
    }

    @Get("/crows/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/crows/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/crows/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/crows/:id")
    public delete(@Param("id") id: string) {
    }
}
