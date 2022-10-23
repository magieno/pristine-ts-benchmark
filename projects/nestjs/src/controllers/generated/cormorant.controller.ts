import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CormorantController {
    constructor() {
    }

    @Get("/cormorants")
    public list() {
    }

    @Post("/cormorants")
    public add(@Body() body: any) {
    }

    @Get("/cormorants/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cormorants/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cormorants/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cormorants/:id")
    public delete(@Param("id") id: string) {
    }
}
