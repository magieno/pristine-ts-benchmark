import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SquidController {
    constructor() {
    }

    @Get("/squids")
    public list() {
    }

    @Post("/squids")
    public add(@Body() body: any) {
    }

    @Get("/squids/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/squids/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/squids/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/squids/:id")
    public delete(@Param("id") id: string) {
    }
}
