import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SquirrelController {
    constructor() {
    }

    @Get("/squirrels")
    public list() {
    }

    @Post("/squirrels")
    public add(@Body() body: any) {
    }

    @Get("/squirrels/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/squirrels/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/squirrels/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/squirrels/:id")
    public delete(@Param("id") id: string) {
    }
}
