import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ArmadilloController {
    constructor() {
    }

    @Get("/armadillos")
    public list() {
    }

    @Post("/armadillos")
    public add(@Body() body: any) {
    }

    @Get("/armadillos/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/armadillos/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/armadillos/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/armadillos/:id")
    public delete(@Param("id") id: string) {
    }
}
