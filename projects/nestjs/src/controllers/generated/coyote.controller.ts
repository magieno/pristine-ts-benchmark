import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CoyoteController {
    constructor() {
    }

    @Get("/coyotes")
    public list() {
    }

    @Post("/coyotes")
    public add(@Body() body: any) {
    }

    @Get("/coyotes/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/coyotes/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/coyotes/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/coyotes/:id")
    public delete(@Param("id") id: string) {
    }
}
