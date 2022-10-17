import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class AlpacaController {
    constructor() {
    }

    @Get("/alpacas")
    public list() {
    }

    @Post("/alpacas")
    public add(@Body() body: any) {
    }

    @Get("/alpacas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/alpacas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/alpacas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/alpacas/:id")
    public delete(@Param("id") id: string) {
    }
}
