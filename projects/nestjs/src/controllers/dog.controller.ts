import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

const dogs = [
    "poodle",
    "labrador",
    ""
];

@Controller("/api/1.0")
export class DogController {
    constructor() {
    }

    @Get("/dogs")
    public list() {
        return dogs;
    }

    @Post("/dogs")
    public add(@Body() body: any) {
    }

    @Get("/dogs/:id")
    public get(@Param("id") id: string) {
    }

    @Put("/dogs/:id")
    public update(@Body() body: any, @Param("id") id: string) {
    }

    @Patch("/dogs/:id")
    public partialUpdate(@Body() body: any, @Param("id") id: string) {
    }

    @Delete("/dogs/:id")
    public delete(@Param("id") id: string) {
    }
}
