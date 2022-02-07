/* eslint-disable */
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKComponents/MKBox";
import MKAvatar from "components/MKComponents/MKAvatar";
// import MKButton from "components/MKComponents/MKButton";
import MKTypography from "components/MKComponents/MKTypography";

// Images
import defaultPicture from "assets/images/default-profile-pic.jpeg";

function Profile({ user }) {
  let profilePicture = defaultPicture;
  if (user) {
    if (user.profile_photo) {
      profilePicture = user.profile_photo;
    }
  }

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="profile_picture" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" pb={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h4">{user.full_name}</MKTypography>
                {/* <MKButton variant="outlined" color="info" size="small"> */}
                {/*  Follow */}
                {/* </MKButton> */}
              </MKBox>
              {/*<Grid container spacing={3} mb={3}>*/}
              {/*  <Grid item>*/}
              {/*    <MKTypography component="span" variant="body2" fontWeight="bold">*/}
              {/*      323&nbsp;*/}
              {/*    </MKTypography>*/}
              {/*    <MKTypography component="span" variant="body2" color="text">*/}
              {/*      Posts*/}
              {/*    </MKTypography>*/}
              {/*  </Grid>*/}
              {/*  <Grid item>*/}
              {/*    <MKTypography component="span" variant="body2" fontWeight="bold">*/}
              {/*      3.5k&nbsp;*/}
              {/*    </MKTypography>*/}
              {/*    <MKTypography component="span" variant="body2" color="text">*/}
              {/*      Followers*/}
              {/*    </MKTypography>*/}
              {/*  </Grid>*/}
              {/*  <Grid item>*/}
              {/*    <MKTypography component="span" variant="body2" fontWeight="bold">*/}
              {/*      260&nbsp;*/}
              {/*    </MKTypography>*/}
              {/*    <MKTypography component="span" variant="body2" color="text">*/}
              {/*      Following*/}
              {/*    </MKTypography>*/}
              {/*  </Grid>*/}
              {/*</Grid>*/}
              <MKTypography variant="body1" fontWeight="light" color="text">
                {user.bio}
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

Profile.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Profile;
