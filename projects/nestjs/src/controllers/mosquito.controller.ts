import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MosquitoController {
    constructor() {
    }

    @Get("/mosquitos")
    public list() {
    }

    @Post("/mosquitos")
    public add(@Body() body: any) {
    }

    @Get("/mosquitos/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/mosquitos/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/mosquitos/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/mosquitos/:id")
    public delete(@Param("id") id: string) {
    }
}
