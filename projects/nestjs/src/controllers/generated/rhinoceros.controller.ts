import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class RhinocerosController {
    constructor() {
    }

    @Get("/rhinoceross")
    public list() {
    }

    @Post("/rhinoceross")
    public add(@Body() body: any) {
    }

    @Get("/rhinoceross/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/rhinoceross/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/rhinoceross/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/rhinoceross/:id")
    public delete(@Param("id") id: string) {
    }
}
