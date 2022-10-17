import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CassowaryController {
    constructor() {
    }

    @Get("/cassowarys")
    public list() {
    }

    @Post("/cassowarys")
    public add(@Body() body: any) {
    }

    @Get("/cassowarys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cassowarys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cassowarys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cassowarys/:id")
    public delete(@Param("id") id: string) {
    }
}
