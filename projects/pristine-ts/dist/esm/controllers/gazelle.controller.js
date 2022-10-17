var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { singleton } from "tsyringe";
import { controller, route, body, routeParameter } from "@pristine-ts/networking";
import { HttpMethod } from "@pristine-ts/common";
let GazelleController = class GazelleController {
    constructor() {
    }
    list() {
    }
    add(body) {
    }
    get(id) {
    }
    update(body, id) {
    }
    partialUpdate(body, id) {
    }
    delete(id) {
    }
};
__decorate([
    route(HttpMethod.Get, "/gazelles"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GazelleController.prototype, "list", null);
__decorate([
    route(HttpMethod.Post, "/gazelles"),
    __param(0, body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GazelleController.prototype, "add", null);
__decorate([
    route(HttpMethod.Get, "/gazelles/:id"),
    __param(0, routeParameter("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GazelleController.prototype, "get", null);
__decorate([
    route(HttpMethod.Put, "/gazelles/:id"),
    __param(0, body()),
    __param(1, routeParameter("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GazelleController.prototype, "update", null);
__decorate([
    route(HttpMethod.Patch, "/gazelles/:id"),
    __param(0, body()),
    __param(1, routeParameter("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GazelleController.prototype, "partialUpdate", null);
__decorate([
    route(HttpMethod.Delete, "/gazelles/:id"),
    __param(0, routeParameter("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GazelleController.prototype, "delete", null);
GazelleController = __decorate([
    controller("/api/1.0"),
    singleton(),
    __metadata("design:paramtypes", [])
], GazelleController);
export { GazelleController };
//# sourceMappingURL=gazelle.controller.js.map