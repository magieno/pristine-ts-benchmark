import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class QuetzalController {
    constructor() {
    }

    @Get("/quetzals")
    public list() {
    }

    @Post("/quetzals")
    public add(@Body() body: any) {
    }

    @Get("/quetzals/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/quetzals/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/quetzals/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/quetzals/:id")
    public delete(@Param("id") id: string) {
    }
}
