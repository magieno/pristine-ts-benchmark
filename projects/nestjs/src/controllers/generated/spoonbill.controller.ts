import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SpoonbillController {
    constructor() {
    }

    @Get("/spoonbills")
    public list() {
    }

    @Post("/spoonbills")
    public add(@Body() body: any) {
    }

    @Get("/spoonbills/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/spoonbills/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/spoonbills/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/spoonbills/:id")
    public delete(@Param("id") id: string) {
    }
}
