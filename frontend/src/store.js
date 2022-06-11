import { configureStore } from '@reduxjs/toolkit'
import { conversationReducer } from './Reducers/Conversation';
import { likeReducer, myPostsReducer, userPostsReducer } from './Reducers/Post';
import { allUsersReducer, postOfFollowingReducer, userProfileReducer, userReducer } from './Reducers/User';


const store = configureStore({
    reducer:{
        user: userReducer,
        postOfFollowing: postOfFollowingReducer,
        allUsers: allUsersReducer,
        like: likeReducer,
        myPosts: myPostsReducer,
        userProfile: userProfileReducer,
        userPosts: userPostsReducer,
        conversation: conversationReducer,
    }
});

export default store;