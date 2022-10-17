import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WallabyController {
    constructor() {
    }

    @Get("/wallabys")
    public list() {
    }

    @Post("/wallabys")
    public add(@Body() body: any) {
    }

    @Get("/wallabys/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/wallabys/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/wallabys/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/wallabys/:id")
    public delete(@Param("id") id: string) {
    }
}
