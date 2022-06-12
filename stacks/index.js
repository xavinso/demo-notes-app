import { AuthStack } from "./AuthStack";
import { StorageStack } from "./StorageStack";
import { ApiStack } from "./ApiStack";
import { FrontendStack } from "./FrontendStack";
import { App } from "@serverless-stack/resources";

/**
 * @param {App} app
 */
export default function (app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "backend",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack).stack(ApiStack).stack(AuthStack).stack(FrontendStack);
}
