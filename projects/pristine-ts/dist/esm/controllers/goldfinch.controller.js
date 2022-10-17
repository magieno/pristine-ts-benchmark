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
let GoldfinchController = class GoldfinchController {
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
    route(HttpMethod.Get, "/goldfinchs"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoldfinchController.prototype, "list", null);
__decorate([
    route(HttpMethod.Post, "/goldfinchs"),
    __param(0, body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GoldfinchController.prototype, "add", null);
__decorate([
    route(HttpMethod.Get, "/goldfinchs/:id"),
    __param(0, routeParameter("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoldfinchController.prototype, "get", null);
__decorate([
    route(HttpMethod.Put, "/goldfinchs/:id"),
    __param(0, body()),
    __param(1, routeParameter("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GoldfinchController.prototype, "update", null);
__decorate([
    route(HttpMethod.Patch, "/goldfinchs/:id"),
    __param(0, body()),
    __param(1, routeParameter("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], GoldfinchController.prototype, "partialUpdate", null);
__decorate([
    route(HttpMethod.Delete, "/goldfinchs/:id"),
    __param(0, routeParameter("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoldfinchController.prototype, "delete", null);
GoldfinchController = __decorate([
    controller("/api/1.0"),
    singleton(),
    __metadata("design:paramtypes", [])
], GoldfinchController);
export { GoldfinchController };
//# sourceMappingURL=goldfinch.controller.js.map