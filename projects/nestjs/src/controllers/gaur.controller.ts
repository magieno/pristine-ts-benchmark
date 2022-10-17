import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GaurController {
    constructor() {
    }

    @Get("/gaurs")
    public list() {
    }

    @Post("/gaurs")
    public add(@Body() body: any) {
    }

    @Get("/gaurs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/gaurs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/gaurs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/gaurs/:id")
    public delete(@Param("id") id: string) {
    }
}
