import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class GazelleController {
    constructor() {
    }

    @Get("/gazelles")
    public list() {
    }

    @Post("/gazelles")
    public add(@Body() body: any) {
    }

    @Get("/gazelles/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/gazelles/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/gazelles/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/gazelles/:id")
    public delete(@Param("id") id: string) {
    }
}
