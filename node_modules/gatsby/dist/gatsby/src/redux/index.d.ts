import { DeepPartial, ReducersMapObject } from "redux";
import { ThunkAction } from "redux-thunk";
import { IGatsbyState, ActionsUnion, GatsbyStateKeys } from "./types";
export declare const emitter: import("../utils/mett").IMett;
export declare const readState: () => IGatsbyState;
export interface IMultiDispatch {
    <T extends ActionsUnion | ThunkAction<any, IGatsbyState, any, ActionsUnion>>(action: Array<T>): Array<T>;
}
export declare const configureStore: (initialState: IGatsbyState) => import("redux").Store<import("redux").CombinedState<IGatsbyState>, import("redux").AnyAction> & {
    dispatch: import("redux-thunk").ThunkDispatch<IGatsbyState, undefined, ActionsUnion> & IMultiDispatch;
};
export declare type GatsbyReduxStore = ReturnType<typeof configureStore>;
export declare const store: GatsbyReduxStore;
/**
 * Allows overloading some reducers (e.g. when setting a custom datastore)
 */
export declare function replaceReducer(customReducers: Partial<ReducersMapObject<IGatsbyState>>): void;
export declare const saveState: () => void;
export declare const saveStateForWorkers: (slices: Array<GatsbyStateKeys>) => void;
export declare const loadStateInWorker: (slices: Array<GatsbyStateKeys>) => DeepPartial<IGatsbyState>;
