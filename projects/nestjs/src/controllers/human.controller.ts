import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HumanController {
    constructor() {
    }

    @Get("/humans")
    public list() {
    }

    @Post("/humans")
    public add(@Body() body: any) {
    }

    @Get("/humans/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/humans/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/humans/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/humans/:id")
    public delete(@Param("id") id: string) {
    }
}
