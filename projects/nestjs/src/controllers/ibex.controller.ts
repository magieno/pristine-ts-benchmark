import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class IbexController {
    constructor() {
    }

    @Get("/ibexs")
    public list() {
    }

    @Post("/ibexs")
    public add(@Body() body: any) {
    }

    @Get("/ibexs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/ibexs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/ibexs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/ibexs/:id")
    public delete(@Param("id") id: string) {
    }
}
