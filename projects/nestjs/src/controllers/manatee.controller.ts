import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ManateeController {
    constructor() {
    }

    @Get("/manatees")
    public list() {
    }

    @Post("/manatees")
    public add(@Body() body: any) {
    }

    @Get("/manatees/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/manatees/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/manatees/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/manatees/:id")
    public delete(@Param("id") id: string) {
    }
}
