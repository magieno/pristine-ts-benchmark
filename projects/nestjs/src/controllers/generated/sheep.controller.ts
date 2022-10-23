import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SheepController {
    constructor() {
    }

    @Get("/sheeps")
    public list() {
    }

    @Post("/sheeps")
    public add(@Body() body: any) {
    }

    @Get("/sheeps/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/sheeps/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/sheeps/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/sheeps/:id")
    public delete(@Param("id") id: string) {
    }
}
