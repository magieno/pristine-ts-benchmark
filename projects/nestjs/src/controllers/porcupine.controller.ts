import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class PorcupineController {
    constructor() {
    }

    @Get("/porcupines")
    public list() {
    }

    @Post("/porcupines")
    public add(@Body() body: any) {
    }

    @Get("/porcupines/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/porcupines/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/porcupines/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/porcupines/:id")
    public delete(@Param("id") id: string) {
    }
}
