import { useEffect, useState } from "react";

// React-router-dom components
import { useParams, useLocation } from "react-router-dom";

// React-redux components
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line import/no-cycle
import Layout from "common/Layout";

// Images
import bgImage from "assets/images/city-profile.jpg";

import { getBlogPosts } from "../reducers/blogReducers";
import ArticleLargeList from "./components/ArticleLargeList";

function ArticleListContainer() {
  // STATE
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");

  // React-router-dom
  const { pathname } = useLocation();

  // REDUX
  const dispatch = useDispatch();
  const blogPosts = useSelector((state) => state.blogReducer.blogPosts);
  const user = useSelector((state) => state.loginReducer.user);

  useEffect(() => {
    if (pathname === "/blog/my-posts") {
      setAuthor(user.pk);
    } else if (pathname === "/") {
      setStatus("P");
    } else {
      const params = useParams();
      const { userID } = params;
      setAuthor(userID);
      setStatus("P");
    }
    dispatch(getBlogPosts({ author, status }));
  }, []);

  return (
    <Layout image={bgImage}>{blogPosts ? <ArticleLargeList blogPosts={blogPosts} /> : null}</Layout>
  );
}

export default ArticleListContainer;
