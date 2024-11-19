import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../../shared/models";

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        'Set Authenticated User': props<{ user: User }>(),
        'Unset Autheticate User': emptyProps()
    }
})