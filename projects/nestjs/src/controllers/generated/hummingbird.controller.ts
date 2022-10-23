import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class HummingbirdController {
    constructor() {
    }

    @Get("/hummingbirds")
    public list() {
    }

    @Post("/hummingbirds")
    public add(@Body() body: any) {
    }

    @Get("/hummingbirds/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/hummingbirds/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/hummingbirds/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/hummingbirds/:id")
    public delete(@Param("id") id: string) {
    }
}
