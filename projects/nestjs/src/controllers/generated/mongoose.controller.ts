import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MongooseController {
    constructor() {
    }

    @Get("/mongooses")
    public list() {
    }

    @Post("/mongooses")
    public add(@Body() body: any) {
    }

    @Get("/mongooses/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/mongooses/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/mongooses/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/mongooses/:id")
    public delete(@Param("id") id: string) {
    }
}
