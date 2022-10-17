import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class TurtleController {
    constructor() {
    }

    @Get("/turtles")
    public list() {
    }

    @Post("/turtles")
    public add(@Body() body: any) {
    }

    @Get("/turtles/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/turtles/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/turtles/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/turtles/:id")
    public delete(@Param("id") id: string) {
    }
}
