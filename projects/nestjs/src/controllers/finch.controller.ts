import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class FinchController {
    constructor() {
    }

    @Get("/finchs")
    public list() {
    }

    @Post("/finchs")
    public add(@Body() body: any) {
    }

    @Get("/finchs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/finchs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/finchs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/finchs/:id")
    public delete(@Param("id") id: string) {
    }
}
