import { WorkerPool } from "gatsby-worker";
import { IGroupedQueryIds } from "../../services";
export declare type GatsbyWorkerPool = WorkerPool<typeof import("./child")>;
export declare const create: () => GatsbyWorkerPool;
export declare function runQueriesInWorkersQueue(pool: GatsbyWorkerPool, queryIds: IGroupedQueryIds, chunkSize?: number): Promise<void>;
