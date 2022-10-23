import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ChickenController {
    constructor() {
    }

    @Get("/chickens")
    public list() {
    }

    @Post("/chickens")
    public add(@Body() body: any) {
    }

    @Get("/chickens/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/chickens/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/chickens/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/chickens/:id")
    public delete(@Param("id") id: string) {
    }
}
