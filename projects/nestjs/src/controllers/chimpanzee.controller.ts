import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class ChimpanzeeController {
    constructor() {
    }

    @Get("/chimpanzees")
    public list() {
    }

    @Post("/chimpanzees")
    public add(@Body() body: any) {
    }

    @Get("/chimpanzees/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/chimpanzees/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/chimpanzees/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/chimpanzees/:id")
    public delete(@Param("id") id: string) {
    }
}
