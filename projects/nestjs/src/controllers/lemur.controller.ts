import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LemurController {
    constructor() {
    }

    @Get("/lemurs")
    public list() {
    }

    @Post("/lemurs")
    public add(@Body() body: any) {
    }

    @Get("/lemurs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/lemurs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/lemurs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/lemurs/:id")
    public delete(@Param("id") id: string) {
    }
}
