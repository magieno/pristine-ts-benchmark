import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WormController {
    constructor() {
    }

    @Get("/worms")
    public list() {
    }

    @Post("/worms")
    public add(@Body() body: any) {
    }

    @Get("/worms/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/worms/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/worms/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/worms/:id")
    public delete(@Param("id") id: string) {
    }
}
