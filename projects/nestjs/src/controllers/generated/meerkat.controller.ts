import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MeerkatController {
    constructor() {
    }

    @Get("/meerkats")
    public list() {
    }

    @Post("/meerkats")
    public add(@Body() body: any) {
    }

    @Get("/meerkats/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/meerkats/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/meerkats/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/meerkats/:id")
    public delete(@Param("id") id: string) {
    }
}
