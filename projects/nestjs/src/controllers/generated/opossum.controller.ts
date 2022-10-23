import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class OpossumController {
    constructor() {
    }

    @Get("/opossums")
    public list() {
    }

    @Post("/opossums")
    public add(@Body() body: any) {
    }

    @Get("/opossums/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/opossums/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/opossums/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/opossums/:id")
    public delete(@Param("id") id: string) {
    }
}
