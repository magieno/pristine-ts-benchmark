import "reflect-metadata"
import {ExpressModule, RequestMapper, ResponseMapper} from "@pristine-ts/express";
import {appModule} from "./app.module";
import {ExecutionContextKeynameEnum, Kernel} from "@pristine-ts/core";
import {LoggingModuleKeyname} from "@pristine-ts/logging";

const express = require('express')
const app = express()
const port = 3000
const kernel = new Kernel();

function bootstrap () {
    appModule.importModules.push(ExpressModule);

    app.all('*', async (req, res) => {
        await kernel.handle(req, {keyname: ExecutionContextKeynameEnum.Express, context: {req, res}});
    })

    app.listen(port, async () => {
        await kernel.start(appModule, {
            [LoggingModuleKeyname + ".consoleLoggerActivated"]: false
        });

        console.log(`Example app listening at http://localhost:${port}`)
    })
}

bootstrap();
