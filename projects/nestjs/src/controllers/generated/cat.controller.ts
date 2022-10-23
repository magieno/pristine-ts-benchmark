import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CatController {
    constructor() {
    }

    @Get("/cats")
    public list() {
        for (let i = 0; i < 1000000000; i++) {
        }

        console.log(process.memoryUsage())

        return ["purry", "furry"];
    }

    @Post("/cats")
    public add(@Body() body: any) {
    }

    @Get("/cats/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cats/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cats/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cats/:id")
    public delete(@Param("id") id: string) {
    }
}
