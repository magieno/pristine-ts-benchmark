import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class OctopusController {
    constructor() {
    }

    @Get("/octopuss")
    public list() {
    }

    @Post("/octopuss")
    public add(@Body() body: any) {
    }

    @Get("/octopuss/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/octopuss/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/octopuss/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/octopuss/:id")
    public delete(@Param("id") id: string) {
    }
}
