import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CheetahController {
    constructor() {
    }

    @Get("/cheetahs")
    public list() {
    }

    @Post("/cheetahs")
    public add(@Body() body: any) {
    }

    @Get("/cheetahs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/cheetahs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/cheetahs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/cheetahs/:id")
    public delete(@Param("id") id: string) {
    }
}
