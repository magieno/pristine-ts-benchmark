import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HippopotamusController {
    constructor() {
    }

    @Get("/hippopotamuss")
    public list() {
    }

    @Post("/hippopotamuss")
    public add(@Body() body: any) {
    }

    @Get("/hippopotamuss/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/hippopotamuss/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/hippopotamuss/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/hippopotamuss/:id")
    public delete(@Param("id") id: string) {
    }
}
