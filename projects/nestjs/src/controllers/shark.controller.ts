import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class SharkController {
    constructor() {
    }

    @Get("/sharks")
    public list() {
    }

    @Post("/sharks")
    public add(@Body() body: any) {
    }

    @Get("/sharks/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/sharks/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/sharks/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/sharks/:id")
    public delete(@Param("id") id: string) {
    }
}
