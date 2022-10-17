import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class FishController {
    constructor() {
    }

    @Get("/fishs")
    public list() {
    }

    @Post("/fishs")
    public add(@Body() body: any) {
    }

    @Get("/fishs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/fishs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/fishs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/fishs/:id")
    public delete(@Param("id") id: string) {
    }
}
