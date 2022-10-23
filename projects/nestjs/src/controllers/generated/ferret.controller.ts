import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class FerretController {
    constructor() {
    }

    @Get("/ferrets")
    public list() {
    }

    @Post("/ferrets")
    public add(@Body() body: any) {
    }

    @Get("/ferrets/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/ferrets/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/ferrets/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/ferrets/:id")
    public delete(@Param("id") id: string) {
    }
}
