import { combineReducers } from "redux";
// import { collectionsReducer } from './collections/reducers/collectionsReducer'
import { loginReducer } from "./auth/login/reducers/loginReducer";
// import { searchReducer } from './search/reducers/searchReducer'
// import { gapMapsReducer } from './gapmaps/reducers/gapMapsReducer'
// import { prosReducer } from './pros/reducers/prosReducer'

const rootReducer = combineReducers({
  // collectionsReducer,
  loginReducer,
  // searchReducer,
  // gapMapsReducer,
  // prosReducer,
});

export default rootReducer;
