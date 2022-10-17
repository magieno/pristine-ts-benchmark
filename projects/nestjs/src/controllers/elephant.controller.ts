import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ElephantController {
    constructor() {
    }

    @Get("/elephants")
    public list() {
    }

    @Post("/elephants")
    public add(@Body() body: any) {
    }

    @Get("/elephants/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/elephants/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/elephants/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/elephants/:id")
    public delete(@Param("id") id: string) {
    }
}
