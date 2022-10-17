import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GuanacoController {
    constructor() {
    }

    @Get("/guanacos")
    public list() {
    }

    @Post("/guanacos")
    public add(@Body() body: any) {
    }

    @Get("/guanacos/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/guanacos/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/guanacos/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/guanacos/:id")
    public delete(@Param("id") id: string) {
    }
}
