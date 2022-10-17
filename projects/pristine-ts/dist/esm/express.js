var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import "reflect-metadata";
import { ExpressModule } from "@pristine-ts/express";
import { appModule } from "./app.module";
import { ExecutionContextKeynameEnum, Kernel } from "@pristine-ts/core";
const express = require('express');
const app = express();
const port = 3000;
const kernel = new Kernel();
function bootstrap() {
    appModule.importModules.push(ExpressModule);
    app.all('*', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield kernel.handle(req, { keyname: ExecutionContextKeynameEnum.Express, context: { req, res } });
    }));
    app.listen(port, () => __awaiter(this, void 0, void 0, function* () {
        yield kernel.start(appModule);
        console.log(`Example app listening at http://localhost:${port}`);
    }));
}
bootstrap();
//# sourceMappingURL=express.js.map