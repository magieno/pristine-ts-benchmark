import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GrouseController {
    constructor() {
    }

    @Get("/grouses")
    public list() {
    }

    @Post("/grouses")
    public add(@Body() body: any) {
    }

    @Get("/grouses/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/grouses/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/grouses/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/grouses/:id")
    public delete(@Param("id") id: string) {
    }
}
