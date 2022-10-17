import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class JaguarController {
    constructor() {
    }

    @Get("/jaguars")
    public list() {
    }

    @Post("/jaguars")
    public add(@Body() body: any) {
    }

    @Get("/jaguars/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/jaguars/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/jaguars/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/jaguars/:id")
    public delete(@Param("id") id: string) {
    }
}
