// lambda.ts
import {Context, Handler} from "aws-lambda";
import {AppModule} from "./app.module";
const express = require("express");
import {NestFactory} from "@nestjs/core";
import {ExpressAdapter} from "@nestjs/platform-express";
import { json } from "body-parser";
const awsServerlessExpress = require('aws-serverless-express');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const cloneBuffer = require("clone-buffer");

// Export the handler : the entry point of the Lambda function
let cachedServer;
const binaryMimeTypes: string[] = [];

export const handler: Handler = async (event: any, context: Context) => {
    console.log("Event:" + JSON.stringify(event));
    console.log("Context:" + JSON.stringify(context));

    const expressApp = express();
    const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

    nestApp.use(json());

    nestApp.use(awsServerlessExpressMiddleware.eventContext());

    await nestApp.enableCors();
    await nestApp.init();

    return awsServerlessExpress.createServer(expressApp, undefined, binaryMimeTypes);
};