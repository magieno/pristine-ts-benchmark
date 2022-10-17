import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CodController {
    constructor() {
    }

    @Get("/cods")
    public list() {
    }

    @Post("/cods")
    public add(@Body() body: any) {
    }

    @Get("/cods/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cods/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cods/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cods/:id")
    public delete(@Param("id") id: string) {
    }
}
