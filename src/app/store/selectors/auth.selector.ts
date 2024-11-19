import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeaturedName, AuthState } from "../reducers/auth.reducer";

export const selectAuthState = createFeatureSelector<AuthState>(authFeaturedName)

export const selectAuthenticatedUser = createSelector(
    selectAuthState,
    (state) => state.authenticatedUser
)