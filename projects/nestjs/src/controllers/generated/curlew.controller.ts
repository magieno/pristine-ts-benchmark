import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller("/api/1.0")
export class CurlewController {
    constructor() {
    }

    @Get("/curlews")
    public list() {
    }

    @Post("/curlews")
    public add(@Body() body: any) {
    }

    @Get("/curlews/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/curlews/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/curlews/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/curlews/:id")
    public delete(@Param("id") id: string) {
    }
}
