import { createSelector } from "reselect";

const userSelector = (state) => state.users;

export const getUser = createSelector(
    [userSelector],
    state => state
);