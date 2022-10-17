import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SeahorseController {
    constructor() {
    }

    @Get("/seahorses")
    public list() {
    }

    @Post("/seahorses")
    public add(@Body() body: any) {
    }

    @Get("/seahorses/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/seahorses/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/seahorses/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/seahorses/:id")
    public delete(@Param("id") id: string) {
    }
}
