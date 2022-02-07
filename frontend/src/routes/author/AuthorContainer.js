// react components
import { useEffect } from "react";

// react-router-dom components
import { useParams } from "react-router-dom";

// react-redux components
import { useDispatch, useSelector } from "react-redux";

// Images
import bgImage from "assets/images/city-profile.jpg";

// Author page sections
import ArticleSmallList from "routes/blog/article/components/ArticleSmallList";
import Layout from "common/Layout";
import Profile from "./components/profile";
import { getAuthor } from "./reducers/authorReducers";

function Author() {
  const params = useParams();
  const { username } = params;

  // REDUX
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authorReducer.author);

  useEffect(() => {
    dispatch(getAuthor(username));
  }, []);

  return (
    <Layout image={bgImage}>
      {user ? (
        <>
          <Profile user={user} />
          <ArticleSmallList blogPosts={user.last_three_articles} />
        </>
      ) : null}
    </Layout>
  );
}

export default Author;
