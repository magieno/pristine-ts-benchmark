import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PigController {
    constructor() {
    }

    @Get("/pigs")
    public list() {
    }

    @Post("/pigs")
    public add(@Body() body: any) {
    }

    @Get("/pigs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/pigs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/pigs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/pigs/:id")
    public delete(@Param("id") id: string) {
    }
}
