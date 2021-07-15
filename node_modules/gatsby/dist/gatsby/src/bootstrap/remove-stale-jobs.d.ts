import { IGatsbyState, IRemoveStaleJobAction, ICreateJobV2FromInternalAction } from "../redux/types";
export declare const removeStaleJobs: (state: IGatsbyState) => Array<IRemoveStaleJobAction | ICreateJobV2FromInternalAction>;
