"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TigerController = void 0;
const tsyringe_1 = require("tsyringe");
const networking_1 = require("@pristine-ts/networking");
const common_1 = require("@pristine-ts/common");
let TigerController = class TigerController {
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
    (0, networking_1.route)(common_1.HttpMethod.Get, "/tigers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TigerController.prototype, "list", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Post, "/tigers"),
    __param(0, (0, networking_1.body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TigerController.prototype, "add", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Get, "/tigers/:id"),
    __param(0, (0, networking_1.routeParameter)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TigerController.prototype, "get", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Put, "/tigers/:id"),
    __param(0, (0, networking_1.body)()),
    __param(1, (0, networking_1.routeParameter)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TigerController.prototype, "update", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Patch, "/tigers/:id"),
    __param(0, (0, networking_1.body)()),
    __param(1, (0, networking_1.routeParameter)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TigerController.prototype, "partialUpdate", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Delete, "/tigers/:id"),
    __param(0, (0, networking_1.routeParameter)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TigerController.prototype, "delete", null);
TigerController = __decorate([
    (0, networking_1.controller)("/api/1.0"),
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], TigerController);
exports.TigerController = TigerController;
//# sourceMappingURL=tiger.controller.js.map