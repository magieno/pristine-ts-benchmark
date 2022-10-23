import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WolfController {
    constructor() {
    }

    @Get("/wolfs")
    public list() {
    }

    @Post("/wolfs")
    public add(@Body() body: any) {
    }

    @Get("/wolfs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/wolfs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/wolfs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/wolfs/:id")
    public delete(@Param("id") id: string) {
    }
}
