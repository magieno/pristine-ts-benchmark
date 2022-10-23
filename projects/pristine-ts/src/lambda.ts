import {LoggingModuleKeyname} from "@pristine-ts/logging";
import {appModule} from "./app.module";
import {ExecutionContextKeynameEnum, Kernel} from "@pristine-ts/core";
import {Context} from "aws-lambda";

let cachedKernel: Kernel;

export const bootstrapKernel = async (): Promise<Kernel> => {
    const kernel = new Kernel();

    await kernel.start(appModule,
        {
            [LoggingModuleKeyname + ".consoleLoggerActivated"]: false
        }
    );

    return kernel;
};

export const handler = async (event: any, context: Context) => {
    cachedKernel = cachedKernel ?? await bootstrapKernel();

    return cachedKernel.handle(event, {keyname: ExecutionContextKeynameEnum.AwsLambda, context});
};
