import {singleton} from "tsyringe";
import {controller, route, body, routeParameter, responseHeader} from "@pristine-ts/networking";
import {HttpMethod} from "@pristine-ts/common";

@controller("/api/1.0/tests")
@singleton()
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

    @responseHeader("Cache-Control", "no-cache")
    @route(HttpMethod.Get, "/quick")
    public quick() {
        return {
            framework: "pristine-ts",
            memoryUsage: this.getMemoryUsage(),
            data: ["purry", "furry"],
        };
    }

    @responseHeader("Cache-Control", "no-cache")
    @route(HttpMethod.Get, "/long-running-calculation")
    public longRunningCalculation() {
        for (let i = 0; i < 1000000000; i++) {
        }

        return {
            framework: "pristine-ts",
            memoryUsage: this.getMemoryUsage(),
        };
    }

}
