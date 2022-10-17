import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MandrillController {
    constructor() {
    }

    @Get("/mandrills")
    public list() {
    }

    @Post("/mandrills")
    public add(@Body() body: any) {
    }

    @Get("/mandrills/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/mandrills/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/mandrills/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/mandrills/:id")
    public delete(@Param("id") id: string) {
    }
}
