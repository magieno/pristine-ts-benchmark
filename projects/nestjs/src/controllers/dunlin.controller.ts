import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DunlinController {
    constructor() {
    }

    @Get("/dunlins")
    public list() {
    }

    @Post("/dunlins")
    public add(@Body() body: any) {
    }

    @Get("/dunlins/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/dunlins/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/dunlins/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/dunlins/:id")
    public delete(@Param("id") id: string) {
    }
}
