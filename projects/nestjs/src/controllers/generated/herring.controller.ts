import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HerringController {
    constructor() {
    }

    @Get("/herrings")
    public list() {
    }

    @Post("/herrings")
    public add(@Body() body: any) {
    }

    @Get("/herrings/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/herrings/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/herrings/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/herrings/:id")
    public delete(@Param("id") id: string) {
    }
}
