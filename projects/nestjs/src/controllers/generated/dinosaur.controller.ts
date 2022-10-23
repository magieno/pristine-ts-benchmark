import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DinosaurController {
    constructor() {
    }

    @Get("/dinosaurs")
    public list() {
    }

    @Post("/dinosaurs")
    public add(@Body() body: any) {
    }

    @Get("/dinosaurs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/dinosaurs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/dinosaurs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/dinosaurs/:id")
    public delete(@Param("id") id: string) {
    }
}
