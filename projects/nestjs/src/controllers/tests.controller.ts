import {Controller, Get, Header} from "@nestjs/common";

@Controller("/api/1.0/tests")
export class TestsController {
    constructor() {
    }

    private getMemoryUsage() {
        const memoryUsage = process.memoryUsage();

        let response = {};

        for (let key in memoryUsage) {
            response[key] = Math.round(memoryUsage[key] / 1024 / 1024 * 100) / 100 + "MB";
        }

        return response;
    }

    @Header("Cache-Control", "no-cache")
    @Get("/quick")
    public quick() {
        return {
            framework: "nestjs",
            memoryUsage: this.getMemoryUsage(),
            data: ["purry", "furry"],
        };
    }

    @Header("Cache-Control", "no-cache")
    @Get("/long-running-calculation")
    public longRunningCalculation() {
        for (let i = 0; i < 1000000000; i++) {
        }

        return {
            framework: "nestjs",
            memoryUsage: this.getMemoryUsage(),
        };
    }

}
