// react components
import { useEffect } from "react";

// react-router-dom components
import { useLocation, useParams, Link } from "react-router-dom";

// react-redux components
import { useDispatch, useSelector } from "react-redux";

// Images
import bgImage from "assets/images/city-profile.jpg";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Author page sections
import ArticleSmallList from "routes/blog/article/components/ArticleSmallList";
import Layout from "common/Layout";
import Profile from "./components/profile";
import { getAuthor } from "./reducers/authorReducers";
import MKTypography from "../../components/MKComponents/MKTypography";
import MKBox from "../../components/MKComponents/MKBox";

function Author() {
  const params = useParams();
  const { pathname } = useLocation();
  const { username } = params;

  // REDUX
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authorReducer.author);

  useEffect(() => {
    dispatch(getAuthor(username));
  }, [pathname]);

  return (
    <Layout image={bgImage}>
      {user ? (
        <>
          <Profile user={user} />
          <MKBox component="section" py={6} mt={6}>
            <Container>
              <Grid
                container
                item
                xs={12}
                lg={12}
                mx="auto"
                justifyContent="center"
                flexDirection="column"
                alignContent="center"
              >
                <MKTypography variant="h3" mb={3} textAlign="center">
                  <Link to={`/blog/authors/${user.username}/posts`}>Recent Posts</Link>
                </MKTypography>
                <ArticleSmallList blogPosts={user.last_three_articles} />
              </Grid>
            </Container>
          </MKBox>
        </>
      ) : null}
    </Layout>
  );
}

export default Author;
