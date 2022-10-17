import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class WalrusController {
    constructor() {
    }

    @Get("/walruss")
    public list() {
    }

    @Post("/walruss")
    public add(@Body() body: any) {
    }

    @Get("/walruss/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/walruss/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/walruss/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/walruss/:id")
    public delete(@Param("id") id: string) {
    }
}
