import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MooseController {
    constructor() {
    }

    @Get("/mooses")
    public list() {
    }

    @Post("/mooses")
    public add(@Body() body: any) {
    }

    @Get("/mooses/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/mooses/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/mooses/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/mooses/:id")
    public delete(@Param("id") id: string) {
    }
}
