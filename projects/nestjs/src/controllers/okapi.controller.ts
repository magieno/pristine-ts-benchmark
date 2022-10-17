import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class OkapiController {
    constructor() {
    }

    @Get("/okapis")
    public list() {
    }

    @Post("/okapis")
    public add(@Body() body: any) {
    }

    @Get("/okapis/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/okapis/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/okapis/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/okapis/:id")
    public delete(@Param("id") id: string) {
    }
}
