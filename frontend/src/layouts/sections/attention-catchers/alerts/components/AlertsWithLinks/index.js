/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKComponents/MKBox";
import MKAlert from "components/MKComponents/MKAlert";
import MKTypography from "components/MKComponents/MKTypography";

function AlertsWithLinks() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="primary">
              A simple primary alert with an&nbsp;
              <MKTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </MKTypography>
              . Give it a click if you like.
            </MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="secondary">
              A simple secondary alert with an&nbsp;
              <MKTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </MKTypography>
              . Give it a click if you like.
            </MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="success">
              A simple success alert with an&nbsp;
              <MKTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </MKTypography>
              . Give it a click if you like.
            </MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="error">
              A simple error alert with an&nbsp;
              <MKTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </MKTypography>
              . Give it a click if you like.
            </MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="warning">
              A simple warning alert with an&nbsp;
              <MKTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </MKTypography>
              . Give it a click if you like.
            </MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="info">
              A simple info alert with an&nbsp;
              <MKTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </MKTypography>
              . Give it a click if you like.
            </MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="light">
              A simple light alert with an&nbsp;
              <MKTypography component="a" href="#" variant="body2" fontWeight="bold" color="dark">
                example link
              </MKTypography>
              . Give it a click if you like.
            </MKAlert>
          </Grid>
          <Grid item xs={12}>
            <MKAlert color="dark">
              A simple dark alert with an&nbsp;
              <MKTypography component="a" href="#" variant="body2" fontWeight="bold" color="white">
                example link
              </MKTypography>
              . Give it a click if you like.
            </MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AlertsWithLinks;
