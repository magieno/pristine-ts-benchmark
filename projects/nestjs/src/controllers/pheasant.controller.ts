import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PheasantController {
    constructor() {
    }

    @Get("/pheasants")
    public list() {
    }

    @Post("/pheasants")
    public add(@Body() body: any) {
    }

    @Get("/pheasants/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/pheasants/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/pheasants/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/pheasants/:id")
    public delete(@Param("id") id: string) {
    }
}
