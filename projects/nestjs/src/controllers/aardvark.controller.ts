import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class AardvarkController {
    constructor() {
    }

    @Get("/aardvarks")
    public list() {
    }

    @Post("/aardvarks")
    public add(@Body() body: any) {
    }

    @Get("/aardvarks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/aardvarks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/aardvarks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/aardvarks/:id")
    public delete(@Param("id") id: string) {
    }
}
