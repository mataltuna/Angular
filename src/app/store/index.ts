import { ActionReducerMap } from "@ngrx/store";
import { authFeaturedName, authReducer, AuthState } from "./auth.reducer";

interface RootState {
    [authFeaturedName]: AuthState
}

const RootReduce: ActionReducerMap<RootState> = {
    [authFeaturedName]: authReducer
}

export { RootReduce }