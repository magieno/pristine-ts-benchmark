import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DeerController {
    constructor() {
    }

    @Get("/deers")
    public list() {
    }

    @Post("/deers")
    public add(@Body() body: any) {
    }

    @Get("/deers/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/deers/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/deers/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/deers/:id")
    public delete(@Param("id") id: string) {
    }
}
