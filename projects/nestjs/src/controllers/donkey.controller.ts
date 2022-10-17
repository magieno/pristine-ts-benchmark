import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DonkeyController {
    constructor() {
    }

    @Get("/donkeys")
    public list() {
    }

    @Post("/donkeys")
    public add(@Body() body: any) {
    }

    @Get("/donkeys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/donkeys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/donkeys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/donkeys/:id")
    public delete(@Param("id") id: string) {
    }
}
