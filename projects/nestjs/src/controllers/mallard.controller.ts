import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class MallardController {
    constructor() {
    }

    @Get("/mallards")
    public list() {
    }

    @Post("/mallards")
    public add(@Body() body: any) {
    }

    @Get("/mallards/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/mallards/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/mallards/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/mallards/:id")
    public delete(@Param("id") id: string) {
    }
}
