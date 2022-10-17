import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HeronController {
    constructor() {
    }

    @Get("/herons")
    public list() {
    }

    @Post("/herons")
    public add(@Body() body: any) {
    }

    @Get("/herons/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/herons/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/herons/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/herons/:id")
    public delete(@Param("id") id: string) {
    }
}
