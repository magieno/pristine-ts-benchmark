import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class BarracudaController {
    constructor() {
    }

    @Get("/barracudas")
    public list() {
    }

    @Post("/barracudas")
    public add(@Body() body: any) {
    }

    @Get("/barracudas/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/barracudas/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/barracudas/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/barracudas/:id")
    public delete(@Param("id") id: string) {
    }
}
