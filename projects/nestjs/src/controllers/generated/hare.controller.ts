import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HareController {
    constructor() {
    }

    @Get("/hares")
    public list() {
    }

    @Post("/hares")
    public add(@Body() body: any) {
    }

    @Get("/hares/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/hares/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/hares/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/hares/:id")
    public delete(@Param("id") id: string) {
    }
}
