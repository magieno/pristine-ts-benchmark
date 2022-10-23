import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SandpiperController {
    constructor() {
    }

    @Get("/sandpipers")
    public list() {
    }

    @Post("/sandpipers")
    public add(@Body() body: any) {
    }

    @Get("/sandpipers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/sandpipers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/sandpipers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/sandpipers/:id")
    public delete(@Param("id") id: string) {
    }
}
