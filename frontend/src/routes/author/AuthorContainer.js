// react components
import { useEffect, useState } from "react";

// react-router-dom components
import { useParams } from "react-router-dom";

// react-redux components
import { useDispatch, useSelector } from "react-redux";

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKComponents/MKBox";

// Project Navbar & Footer
import DefaultNavbar from "common/Navbar/index";
import SimpleFooter from "common/Footer/index";

// Images
import bgImage from "assets/images/city-profile.jpg";

// Routes
// eslint-disable-next-line import/no-cycle
import routes from "new_routes";

// Author page sections
// import Posts from "pages/CreativeTim/Blogs/Author/sections/Posts";
import Profile from "./components/profile";
import { getAuthor } from "./reducers/authorReducers";

function Author() {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const { username } = params;

  // REDUX
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authorReducer.author);

  useEffect(() => {
    dispatch(getAuthor(username));
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      {user ? (
        <MKBox bgColor="white" minHeight="97vh">
          <MKBox
            minHeight="25rem"
            width="100%"
            sx={{
              backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              placeItems: "center",
            }}
          />
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 3 },
              mt: -8,
              mb: 4,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <Profile user={user} />
            {/* <Posts /> */}
          </Card>
        </MKBox>
      ) : null}
      <SimpleFooter />
    </>
  );
}

export default Author;
