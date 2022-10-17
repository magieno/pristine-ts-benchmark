import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class KingfisherController {
    constructor() {
    }

    @Get("/kingfishers")
    public list() {
    }

    @Post("/kingfishers")
    public add(@Body() body: any) {
    }

    @Get("/kingfishers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/kingfishers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/kingfishers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/kingfishers/:id")
    public delete(@Param("id") id: string) {
    }
}
