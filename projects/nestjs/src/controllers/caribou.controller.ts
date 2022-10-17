import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CaribouController {
    constructor() {
    }

    @Get("/caribous")
    public list() {
    }

    @Post("/caribous")
    public add(@Body() body: any) {
    }

    @Get("/caribous/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/caribous/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/caribous/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/caribous/:id")
    public delete(@Param("id") id: string) {
    }
}
