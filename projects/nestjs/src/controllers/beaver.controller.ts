import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BeaverController {
    constructor() {
    }

    @Get("/beavers")
    public list() {
    }

    @Post("/beavers")
    public add(@Body() body: any) {
    }

    @Get("/beavers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/beavers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/beavers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/beavers/:id")
    public delete(@Param("id") id: string) {
    }
}
