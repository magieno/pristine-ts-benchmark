import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class RookController {
    constructor() {
    }

    @Get("/rooks")
    public list() {
    }

    @Post("/rooks")
    public add(@Body() body: any) {
    }

    @Get("/rooks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/rooks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/rooks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/rooks/:id")
    public delete(@Param("id") id: string) {
    }
}
