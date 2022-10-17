import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WoodcockController {
    constructor() {
    }

    @Get("/woodcocks")
    public list() {
    }

    @Post("/woodcocks")
    public add(@Body() body: any) {
    }

    @Get("/woodcocks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/woodcocks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/woodcocks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/woodcocks/:id")
    public delete(@Param("id") id: string) {
    }
}
