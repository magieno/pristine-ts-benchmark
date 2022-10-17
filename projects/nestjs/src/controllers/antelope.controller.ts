import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class AntelopeController {
    constructor() {
    }

    @Get("/antelopes")
    public list() {
    }

    @Post("/antelopes")
    public add(@Body() body: any) {
    }

    @Get("/antelopes/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/antelopes/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/antelopes/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/antelopes/:id")
    public delete(@Param("id") id: string) {
    }
}
