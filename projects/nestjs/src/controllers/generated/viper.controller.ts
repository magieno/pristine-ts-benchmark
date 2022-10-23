import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ViperController {
    constructor() {
    }

    @Get("/vipers")
    public list() {
    }

    @Post("/vipers")
    public add(@Body() body: any) {
    }

    @Get("/vipers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/vipers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/vipers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/vipers/:id")
    public delete(@Param("id") id: string) {
    }
}
