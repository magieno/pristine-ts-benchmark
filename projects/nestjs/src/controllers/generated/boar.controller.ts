import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BoarController {
    constructor() {
    }

    @Get("/boars")
    public list() {
    }

    @Post("/boars")
    public add(@Body() body: any) {
    }

    @Get("/boars/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/boars/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/boars/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/boars/:id")
    public delete(@Param("id") id: string) {
    }
}
