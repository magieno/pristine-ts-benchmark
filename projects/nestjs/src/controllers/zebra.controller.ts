import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ZebraController {
    constructor() {
    }

    @Get("/zebras")
    public list() {
    }

    @Post("/zebras")
    public add(@Body() body: any) {
    }

    @Get("/zebras/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/zebras/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/zebras/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/zebras/:id")
    public delete(@Param("id") id: string) {
    }
}
