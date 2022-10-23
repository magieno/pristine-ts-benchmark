import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class KuduController {
    constructor() {
    }

    @Get("/kudus")
    public list() {
    }

    @Post("/kudus")
    public add(@Body() body: any) {
    }

    @Get("/kudus/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/kudus/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/kudus/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/kudus/:id")
    public delete(@Param("id") id: string) {
    }
}
