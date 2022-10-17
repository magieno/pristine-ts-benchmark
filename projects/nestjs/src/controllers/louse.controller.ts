import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class LouseController {
    constructor() {
    }

    @Get("/louses")
    public list() {
    }

    @Post("/louses")
    public add(@Body() body: any) {
    }

    @Get("/louses/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/louses/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/louses/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/louses/:id")
    public delete(@Param("id") id: string) {
    }
}
