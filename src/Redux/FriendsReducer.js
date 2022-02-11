const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
let initialState = {
    friends: [{ id: 1, img: 'https://www.kindpng.com/picc/m/110-1107016_sabes-da-wae-mammal-cartoon-vertebrate-beak-uganda.png', followed: true, fullName: 'Dmitry B', status: 'Good job', location: { city: 'Kharkiv', country: 'Ukraine' } },
    { id: 2, img: 'https://www.kindpng.com/picc/m/110-1107016_sabes-da-wae-mammal-cartoon-vertebrate-beak-uganda.png', followed: true, fullName: 'Alex G', status: 'Good job', location: { city: 'Kharkiv', country: 'Ukraine' } },
    { id: 3, img: 'https://www.kindpng.com/picc/m/110-1107016_sabes-da-wae-mammal-cartoon-vertebrate-beak-uganda.png', followed: false, fullName: 'Uganda V', status: 'Good job', location: { city: 'Kharkiv', country: 'Ukraine' } },
    { id: 4, img: 'https://www.kindpng.com/picc/m/110-1107016_sabes-da-wae-mammal-cartoon-vertebrate-beak-uganda.png', followed: true, fullName: 'Peter P', status: 'Good job', location: { city: 'Kharkiv', country: 'Ukraine' }, }
        ],

};
const friendsReducer = (State = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...State,
                friends: State.friends.map(f => {
                    if (f.id === action.friendID) {
                        return { ...f, followed: false }
                    }
                    return f;
                }
                )
            }
        case UNFOLLOW:
            return {
                ...State,
                friends: State.friends.map(f => {
                    if (f.id === action.friendID) {
                        return { ...f, followed: true }
                    }
                    return f;
                }
                )
            }
        case SET_FRIENDS:
            return{
                ...State,
                friends: [...State.friends, ...action.friends]
            }

        default:
            return State;
    }
}


export default friendsReducer;

export const followAC = (friendID) => {
    return {
        type: FOLLOW, friendID
    }
};
export const UnfollowAC = (friendID) => {
    return {
        type: UNFOLLOW, friendID
    }
};
export const setFriends = (friend) => {
    return {
        type: SET_FRIENDS, friend
    }
}
