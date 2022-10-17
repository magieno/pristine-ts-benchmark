import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class IbisController {
    constructor() {
    }

    @Get("/ibiss")
    public list() {
    }

    @Post("/ibiss")
    public add(@Body() body: any) {
    }

    @Get("/ibiss/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/ibiss/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/ibiss/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/ibiss/:id")
    public delete(@Param("id") id: string) {
    }
}
