import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class FalconController {
    constructor() {
    }

    @Get("/falcons")
    public list() {
    }

    @Post("/falcons")
    public add(@Body() body: any) {
    }

    @Get("/falcons/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/falcons/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/falcons/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/falcons/:id")
    public delete(@Param("id") id: string) {
    }
}
