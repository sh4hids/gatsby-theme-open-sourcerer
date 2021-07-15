import { IBuildContext } from "../services";
import { Runner } from "./create-graphql-runner";
import type { GatsbyWorkerPool } from "../utils/worker/pool";
export declare function bootstrap(initialContext: Partial<IBuildContext>): Promise<{
    gatsbyNodeGraphQLFunction: Runner;
    workerPool: GatsbyWorkerPool;
}>;
