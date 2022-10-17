import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WombatController {
    constructor() {
    }

    @Get("/wombats")
    public list() {
    }

    @Post("/wombats")
    public add(@Body() body: any) {
    }

    @Get("/wombats/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/wombats/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/wombats/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/wombats/:id")
    public delete(@Param("id") id: string) {
    }
}
