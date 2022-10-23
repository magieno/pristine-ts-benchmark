import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WolverineController {
    constructor() {
    }

    @Get("/wolverines")
    public list() {
    }

    @Post("/wolverines")
    public add(@Body() body: any) {
    }

    @Get("/wolverines/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/wolverines/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/wolverines/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/wolverines/:id")
    public delete(@Param("id") id: string) {
    }
}
