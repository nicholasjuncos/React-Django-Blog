// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKComponents/MKBox";
import MKPagination from "components/MKComponents/MKPagination";

// Material Kit 2 PRO React components
import BlogCard from "routes/blog/article/card";

// Images
import author1 from "assets/images/team-2.jpg";

function BlogPostLargeList() {
  const post1 =
    "https://images.unsplash.com/photo-1592489637182-8c172d6d7826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2300&q=80";

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <BlogCard
                image={post1}
                category={{ color: "primary", label: "house" }}
                title="Shared Coworking"
                description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                author={{
                  image: author1,
                  name: "Mathew Glock",
                  date: "Posted on 28 February",
                }}
                action={{ type: "internal", route: "/pages/blogs/single-article" }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <BlogCard
                image={post1}
                category={{ color: "primary", label: "house" }}
                title="Shared Coworking"
                description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                author={{
                  image: author1,
                  name: "Mathew Glock",
                  date: "Posted on 28 February",
                }}
                action={{ type: "internal", route: "/pages/blogs/single-article" }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <BlogCard
                image={post1}
                category={{ color: "primary", label: "house" }}
                title="Shared Coworking"
                description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                author={{
                  image: author1,
                  name: "Mathew Glock",
                  date: "Posted on 28 February",
                }}
                action={{ type: "internal", route: "/pages/blogs/single-article" }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <BlogCard
                image={post1}
                category={{ color: "primary", label: "house" }}
                title="Shared Coworking"
                description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                author={{
                  image: author1,
                  name: "Mathew Glock",
                  date: "Posted on 28 February",
                }}
                action={{ type: "internal", route: "/pages/blogs/single-article" }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <BlogCard
                image={post1}
                category={{ color: "primary", label: "house" }}
                title="Shared Coworking"
                description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                author={{
                  image: author1,
                  name: "Mathew Glock",
                  date: "Posted on 28 February",
                }}
                action={{ type: "internal", route: "/pages/blogs/single-article" }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MKBox mt={3}>
              <BlogCard
                image={post1}
                category={{ color: "primary", label: "house" }}
                title="Shared Coworking"
                description="Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons."
                author={{
                  image: author1,
                  name: "Mathew Glock",
                  date: "Posted on 28 February",
                }}
                action={{ type: "internal", route: "/pages/blogs/single-article" }}
              />
            </MKBox>
          </Grid>
        </Grid>
        <MKBox mt={5}>
          <MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MKPagination>
            <MKPagination item active>
              1
            </MKPagination>
            <MKPagination item>2</MKPagination>
            <MKPagination item>3</MKPagination>
            <MKPagination item>4</MKPagination>
            <MKPagination item>5</MKPagination>
            <MKPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MKPagination>
          </MKPagination>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default BlogPostLargeList;
