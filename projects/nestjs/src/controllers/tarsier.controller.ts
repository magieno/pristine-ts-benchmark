import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class TarsierController {
    constructor() {
    }

    @Get("/tarsiers")
    public list() {
    }

    @Post("/tarsiers")
    public add(@Body() body: any) {
    }

    @Get("/tarsiers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/tarsiers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/tarsiers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/tarsiers/:id")
    public delete(@Param("id") id: string) {
    }
}
