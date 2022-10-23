import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ShrewController {
    constructor() {
    }

    @Get("/shrews")
    public list() {
    }

    @Post("/shrews")
    public add(@Body() body: any) {
    }

    @Get("/shrews/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/shrews/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/shrews/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/shrews/:id")
    public delete(@Param("id") id: string) {
    }
}
