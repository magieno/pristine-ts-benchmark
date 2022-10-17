import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class EelController {
    constructor() {
    }

    @Get("/eels")
    public list() {
    }

    @Post("/eels")
    public add(@Body() body: any) {
    }

    @Get("/eels/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/eels/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/eels/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/eels/:id")
    public delete(@Param("id") id: string) {
    }
}
