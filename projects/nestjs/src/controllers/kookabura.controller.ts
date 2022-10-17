import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class KookaburaController {
    constructor() {
    }

    @Get("/kookaburas")
    public list() {
    }

    @Post("/kookaburas")
    public add(@Body() body: any) {
    }

    @Get("/kookaburas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/kookaburas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/kookaburas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/kookaburas/:id")
    public delete(@Param("id") id: string) {
    }
}
