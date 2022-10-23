import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LocustController {
    constructor() {
    }

    @Get("/locusts")
    public list() {
    }

    @Post("/locusts")
    public add(@Body() body: any) {
    }

    @Get("/locusts/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/locusts/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/locusts/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/locusts/:id")
    public delete(@Param("id") id: string) {
    }
}
