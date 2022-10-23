import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CattleController {
    constructor() {
    }

    @Get("/cattles")
    public list() {
    }

    @Post("/cattles")
    public add(@Body() body: any) {
    }

    @Get("/cattles/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cattles/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cattles/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cattles/:id")
    public delete(@Param("id") id: string) {
    }
}
