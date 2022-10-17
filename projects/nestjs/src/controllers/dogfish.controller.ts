import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class DogfishController {
    constructor() {
    }

    @Get("/dogfishs")
    public list() {
    }

    @Post("/dogfishs")
    public add(@Body() body: any) {
    }

    @Get("/dogfishs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/dogfishs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/dogfishs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/dogfishs/:id")
    public delete(@Param("id") id: string) {
    }
}
