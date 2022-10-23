import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class NewtController {
    constructor() {
    }

    @Get("/newts")
    public list() {
    }

    @Post("/newts")
    public add(@Body() body: any) {
    }

    @Get("/newts/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/newts/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/newts/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/newts/:id")
    public delete(@Param("id") id: string) {
    }
}
