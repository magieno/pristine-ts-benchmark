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
exports.DeerController = void 0;
const tsyringe_1 = require("tsyringe");
const networking_1 = require("@pristine-ts/networking");
const common_1 = require("@pristine-ts/common");
let DeerController = class DeerController {
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
    (0, networking_1.route)(common_1.HttpMethod.Get, "/deers"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DeerController.prototype, "list", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Post, "/deers"),
    __param(0, (0, networking_1.body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeerController.prototype, "add", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Get, "/deers/:id"),
    __param(0, (0, networking_1.routeParameter)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeerController.prototype, "get", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Put, "/deers/:id"),
    __param(0, (0, networking_1.body)()),
    __param(1, (0, networking_1.routeParameter)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DeerController.prototype, "update", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Patch, "/deers/:id"),
    __param(0, (0, networking_1.body)()),
    __param(1, (0, networking_1.routeParameter)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], DeerController.prototype, "partialUpdate", null);
__decorate([
    (0, networking_1.route)(common_1.HttpMethod.Delete, "/deers/:id"),
    __param(0, (0, networking_1.routeParameter)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DeerController.prototype, "delete", null);
DeerController = __decorate([
    (0, networking_1.controller)("/api/1.0"),
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], DeerController);
exports.DeerController = DeerController;
//# sourceMappingURL=deer.controller.js.map