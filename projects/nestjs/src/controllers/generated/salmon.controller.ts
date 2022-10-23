import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SalmonController {
    constructor() {
    }

    @Get("/salmons")
    public list() {
    }

    @Post("/salmons")
    public add(@Body() body: any) {
    }

    @Get("/salmons/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/salmons/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/salmons/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/salmons/:id")
    public delete(@Param("id") id: string) {
    }
}
