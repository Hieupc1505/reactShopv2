import { fetchUser } from "@store/userAuth/userAction";

//user login
const pendingCase = (state, action) => {
    console.log("pending:::", action);
    return {
        ...state,
        isLoad: true,
    };
};

const fulfilledCase = (state, action) => {
    console.log("action::::", action);
    const { username } = action.payload;
    return {
        ...state,
        isLoad: false,
        username: username,
    };
};

const rejectedCase = (state, action) => {
    console.log("rejected:::", action);
    return {
        ...state,
        ...action,
    };
};

export const userSliceCases = {
    [fetchUser.pending]: pendingCase,
    [fetchUser.fulfilled]: fulfilledCase,
    [fetchUser.rejected]: rejectedCase,
};
