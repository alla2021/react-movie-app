import {IUser} from "../types";

const initialUsersState: IUser[] = [];
export function usersReducer(state = initialUsersState, action: any) {
    switch (action.type) {
        case "Set user":
            return action.payload;
        case "Add user":
            return [...state, action.payload];
        case "Edit user":
            return state.map(user => {
                if (user.id === action.payload.id) {
                    return { ...user, ...action.payload };
                } else {
                    return user;
                }
            });
        case "Delete user":
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
}