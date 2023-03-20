import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../Actions/userSlice";

export default configureStore({
    reducer:{
        user:userReducer,
    }
})
