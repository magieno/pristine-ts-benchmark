import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class EmuController {
    constructor() {
    }

    @Get("/emus")
    public list() {
    }

    @Post("/emus")
    public add(@Body() body: any) {
    }

    @Get("/emus/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/emus/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/emus/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/emus/:id")
    public delete(@Param("id") id: string) {
    }
}
