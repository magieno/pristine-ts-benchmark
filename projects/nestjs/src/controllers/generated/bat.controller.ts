import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BatController {
    constructor() {
    }

    @Get("/bats")
    public list() {
    }

    @Post("/bats")
    public add(@Body() body: any) {
    }

    @Get("/bats/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/bats/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/bats/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/bats/:id")
    public delete(@Param("id") id: string) {
    }
}
