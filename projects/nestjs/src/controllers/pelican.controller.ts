import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PelicanController {
    constructor() {
    }

    @Get("/pelicans")
    public list() {
    }

    @Post("/pelicans")
    public add(@Body() body: any) {
    }

    @Get("/pelicans/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/pelicans/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/pelicans/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/pelicans/:id")
    public delete(@Param("id") id: string) {
    }
}
