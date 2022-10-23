import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CockroachController {
    constructor() {
    }

    @Get("/cockroachs")
    public list() {
    }

    @Post("/cockroachs")
    public add(@Body() body: any) {
    }

    @Get("/cockroachs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cockroachs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cockroachs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cockroachs/:id")
    public delete(@Param("id") id: string) {
    }
}
