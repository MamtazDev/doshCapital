import { useState, useEffect, ReactNode } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

//  React TS Base Styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import dusty from "assets/images/Me.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

function Header({ children }: { children?: ReactNode }): JSX.Element {
  const [tabsOrientation, setTabsOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event: any, newValue: any) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translate(-50%,-50%)",
          zIndex: 9999,
        }}
        align="center"
        height="100%"
        width="40%"
        mt={4}
        lineHeight={1}
      >
        <MDTypography variant="h5" fontWeight="medium">
          About Us
        </MDTypography>
        <MDTypography variant="button" color="text" fontWeight="bold">
          “Helping Others, make money while you sleep”
        </MDTypography>{" "}
        <br />
        <MDTypography variant="button" color="text" fontWeight="regular">
          At Dosh we come together to fix one common problem by providing a Solution and Service to
          Financial Freedom. We provide this through Automated Trading, Networking & DoshCoin Ever
          hard of a company that provides great Service a Robust Product and Reliable steady Income
          through consistent profits? Its Dosh Capital Investment!
        </MDTypography>
      </MDBox>

      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />

      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar src={dusty} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Duston Archer
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                Founder / Director
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab
                  label="App"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      home
                    </Icon>
                  }
                />
                <Tab
                  label="Message"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      email
                    </Icon>
                  }
                />
                <Tab
                  label="Settings"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      settings
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        <MDBox height="100%" mt={4} lineHeight={1}>
          <MDTypography variant="h5" fontWeight="medium">
            About the Author
          </MDTypography>
          <MDTypography variant="button" color="text" fontWeight="regular">
            “Greetings, I am Dusty as you may already know. It is my great pleasure to bring to you
            the beginning of a new era in Automated Trading using our Expert Advisors also known as
            EAs or Trading Bots. It has been my undying passion for over 13 years developing
            Strategies, coding, testing, & failing but never giving up to ultimately Win in the
            Forex markets. I can tell you without a shadow of a doubt, it’s hard, it’s bloody hard…
            but not Impossible” Dusty Archer
          </MDTypography>
        </MDBox>

        <MDBox p={2}>
          <Grid container spacing={6} mt={8}>
            <Grid
              sx={{ boxShadow: "md", backgroundColor: "#202940" }}
              item
              xs={12}
              md={6}
              lg={4}
              xl={4}
            >
              <MDBox
                style={{
                  backgroundColor: "#2D354E",
                  borderRadius: "10px",
                  padding: "20px",
                }}
                pt={2}
                px={2}
                lineHeight={1.25}
              >
                <MDBox style={{ display: "flex", alignItems: "start", gap: "10px" }} mb={1}>
                  <div
                    style={{
                      backgroundColor: "#2D354E",
                      padding: "15px",
                      borderRadius: "10px",
                      marginTop: "-40px",
                      boxShadow: "3px 5px 19px 10px",
                    }}
                  >
                    <img
                      width={40}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
                      alt=""
                    />
                  </div>
                  <MDBox>
                    <MDTypography variant="h6" fontWeight="medium">
                      Our Mission
                    </MDTypography>
                    <Box display="flex" justifyContent="flex-start">
                      <AvatarGroup>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      </AvatarGroup>
                    </Box>
                  </MDBox>
                </MDBox>
                <MDTypography variant="button" color="text">
                  Is to provide the best possible Strategy to Trade Forex with the Goal to Drive
                  Client Investment Growth like no other!
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid
              sx={{ boxShadow: "md", backgroundColor: "#202940" }}
              item
              xs={12}
              md={6}
              lg={4}
              xl={4}
            >
              <MDBox
                style={{
                  backgroundColor: "#2D354E",
                  borderRadius: "10px",
                  padding: "20px",
                }}
                pt={2}
                px={2}
                lineHeight={1.25}
              >
                <MDBox style={{ display: "flex", alignItems: "start", gap: "10px" }} mb={1}>
                  <div
                    style={{
                      backgroundColor: "#2D354E",
                      padding: "15px",
                      borderRadius: "10px",
                      marginTop: "-40px",
                      boxShadow: "3px 5px 19px 10px",
                    }}
                  >
                    <img
                      width={40}
                      src="https://cdn-icons-png.flaticon.com/512/3800/3800016.png"
                      alt=""
                    />
                  </div>
                  <MDBox>
                    <MDTypography variant="h6" fontWeight="medium">
                      Our Vision
                    </MDTypography>
                    <Box display="flex" justifyContent="flex-start">
                      <AvatarGroup>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      </AvatarGroup>
                    </Box>
                  </MDBox>
                </MDBox>
                <MDTypography variant="button" color="text">
                  Is to provide the best possible Strategy to Trade Forex with the Goal to Drive
                  Client Investment Growth like no other!
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid
              sx={{ boxShadow: "md", backgroundColor: "#202940" }}
              item
              xs={12}
              md={6}
              lg={4}
              xl={4}
            >
              <MDBox
                style={{
                  backgroundColor: "#2D354E",
                  borderRadius: "10px",
                  padding: "20px",
                }}
                pt={2}
                px={2}
                lineHeight={1.25}
              >
                <MDBox style={{ display: "flex", alignItems: "start", gap: "10px" }} mb={1}>
                  <div
                    style={{
                      backgroundColor: "#2D354E",
                      padding: "15px",
                      borderRadius: "10px",
                      marginTop: "-40px",
                      boxShadow: "3px 5px 19px 10px",
                    }}
                  >
                    <img
                      width={40}
                      src="https://itsolution.co.th/pub/media/catalog/product/cache/a6018570df4f669992122fea158e9d46/0/1/01-adobe_xd.jpg"
                      alt=""
                    />
                  </div>
                  <MDBox>
                    <MDTypography variant="h6" fontWeight="medium">
                      Business Model
                    </MDTypography>
                    <Box display="flex" justifyContent="flex-start">
                      <AvatarGroup>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                      </AvatarGroup>
                    </Box>
                  </MDBox>
                </MDBox>
                <MDTypography variant="button" color="text">
                  Is to provide the best possible Strategy to Trade Forex with the Goal to Drive
                  Client Investment Growth like no other!
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        {children}
      </Card>
    </MDBox>
  );
}

// Declaring default props for Header
Header.defaultProps = {
  children: "",
};

export default Header;
