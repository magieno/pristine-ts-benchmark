import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class AlligatorController {
    constructor() {
    }

    @Get("/alligators")
    public list() {
    }

    @Post("/alligators")
    public add(@Body() body: any) {
    }

    @Get("/alligators/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/alligators/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/alligators/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/alligators/:id")
    public delete(@Param("id") id: string) {
    }
}
