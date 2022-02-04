import { combineReducers } from "redux";
// import { collectionsReducer } from './collections/reducers/collectionsReducer'
import { loginReducer } from "./auth/login/reducers/loginReducer";
import { profileReducer } from "./profile/reducers/profileReducers";
import { authorReducer } from "./author/reducers/authorReducers";
// import { searchReducer } from './search/reducers/searchReducer'
// import { gapMapsReducer } from './gapmaps/reducers/gapMapsReducer'
// import { prosReducer } from './pros/reducers/prosReducer'

const rootReducer = combineReducers({
  // collectionsReducer,
  loginReducer,
  profileReducer,
  authorReducer,
  // searchReducer,
  // gapMapsReducer,
  // prosReducer,
});

export default rootReducer;
