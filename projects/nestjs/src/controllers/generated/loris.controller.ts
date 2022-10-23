import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LorisController {
    constructor() {
    }

    @Get("/loriss")
    public list() {
    }

    @Post("/loriss")
    public add(@Body() body: any) {
    }

    @Get("/loriss/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/loriss/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/loriss/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/loriss/:id")
    public delete(@Param("id") id: string) {
    }
}
