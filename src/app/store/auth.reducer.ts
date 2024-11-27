import { createReducer, on } from "@ngrx/store";
import { User } from "../shared/models";
import { AuthActions } from "./auth.actions";

export const authFeaturedName = 'auth'

export interface AuthState {
    authenticatedUser: User | null
}

const initialState: AuthState = {
    authenticatedUser: null
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.setAuthenticatedUser, (state, action) => {
        return {
            ...state,
            authenticatedUser: action.user
        }
    }),
    on(AuthActions.unsetAutheticateUser, (state) => {
        return {
            ...state,
            authenticatedUser: null
        }
    })
)