/* eslint-disable no-unused-vars */

import { ReactNode, useEffect, useRef, useState } from "react";
import "./index.css";
import "../../../../../fonts/Felixti.TTF";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Backdrop from "@mui/material/Backdrop";

//  React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import EastIcon from "@mui/icons-material/East";

//  React TS examples components

//  React page layout routes
import pageRoutes from "page.routes";

// Images
import bgImage from "assets/images/bg-pricing.jpg";
import { Container } from "@mui/system";
import HomeNavbar from "examples/Navbars/HomeNavbar";
import video from "assets/hero.mp4";
import homeBg from "assets/images/dosh/homeBg.jpg";
import { Box, Fade, Icon, Link, Modal, Typography } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import MDButton from "../../../../../components/MDButton";

// Declaring props types for Header
interface Props {
  tabValue: number;
  tabHandler: (...arg: any) => void;
  children: ReactNode;
}

function Header({ tabValue, tabHandler, children }: Props): JSX.Element {
  const [mobileView, setMobileView] = useState(false);
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [childopen, setchildOpen] = useState(false);
  const childhandleOpen = () => setchildOpen(true);
  const childhandleClose = () => setchildOpen(false);
  const childModal = () => {
    childhandleOpen();
    handleClose();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <HomeNavbar routes={pageRoutes} />
      <MDBox position="relative" sx={{ position: "relative", height: "100vh" }}>
        <MDBox sx={{ position: "relative", height: "100vh" }}>
          <MDBox
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,.2)",
              // borderRadius:"30px"
            }}
          ></MDBox>
          <Container>
            <Grid
              container
              spacing={3}
              justifyContent="flex-end"
              sx={{ position: "relative", zIndex: "1", py: 22, textAlign: "left" }}
            >
              <Grid item xs={12} lg={6} sx={{ px: { xs: 4, lg: 0 } }}>
                <MDBox mb={0} mt={mobileView ? 6 : 6}>
                  <MDTypography sx={{ fontSize: "12px" }} color="white" align="right">
                    - CROSSOVER TO WHAT WE DO
                  </MDTypography>
                </MDBox>
                <MDBox mb={1}>
                  <MDTypography
                    variant="h1"
                    color="white"
                    fontWeight="bold"
                    align="right"
                    style={{ fontFamily: "felix-titling-regular" }}
                  >
                    AUTOMATED TRADING NETWORKING
                  </MDTypography>
                  <MDTypography
                    variant="h1"
                    color="white"
                    fontWeight="bold"
                    align="right"
                    style={{ fontFamily: "felix-titling-regular" }}
                  >
                    DO$HCOIN
                  </MDTypography>
                </MDBox>
                <MDBox mb={2}>
                  <MDTypography variant="body2" color="white" fontWeight="bold" align="right">
                    Our Strategy stems from these two questions:
                  </MDTypography>
                  <MDTypography
                    variant="body2"
                    color="white"
                    fontWeight="light"
                    align="right"
                    style={{ fontFamily: "footlight-mt-light-regular" }}
                  >
                    How do we win a losing trade in a 6.6 trillion $ market?
                  </MDTypography>
                  <MDTypography
                    variant="body2"
                    color="white"
                    fontWeight="light"
                    align="right"
                    style={{ fontFamily: "footlight-mt-light-regular" }}
                  >
                    And, how do we do it while we sleep?
                  </MDTypography>
                  <MDBox display="flex" justifyContent={"flex-end"} mt={2}>
                    <MDButton
                      onClick={handleOpen}
                      component={Link}
                      to={"/authentication/sign-up/cover"}
                      variant="gradient"
                      color={"info"}
                      size="small"
                      sx={{ mx: 2, mb: 2 }}
                    >
                      {"Tell me more"}
                      <EastIcon />
                    </MDButton>

                    <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      slots={{ backdrop: Backdrop }}
                      slotProps={{
                        backdrop: {
                          timeout: 500,
                        },
                      }}
                    >
                      <Fade in={open}>
                        <Box sx={style}>
                          <MDBox pt={4} pb={3} px={3}>
                            <MDBox component="form" role="form">
                              <MDBox mb={2}>
                                <MDInput type="text" label="Name" variant="standard" fullWidth />
                              </MDBox>
                              <MDBox mb={2}>
                                <MDInput type="email" label="Email" variant="standard" fullWidth />
                              </MDBox>

                              <MDBox mt={4} mb={1}>
                                <MDButton
                                  onClick={childModal}
                                  variant="gradient"
                                  color="info"
                                  fullWidth
                                >
                                  Submit
                                </MDButton>
                              </MDBox>
                            </MDBox>
                          </MDBox>
                        </Box>
                      </Fade>
                    </Modal>

                    <Modal
                      open={childopen}
                      onClose={childhandleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                      </Box>
                    </Modal>

                    {/* <MDButton
                      component={Link}
                      to={"/"}
                      variant="gradient"
                      color={"info"}
                      size="small"
                      sx={{ mb: 2 }}
                    >
                      {"Sign Up"}
                    </MDButton> */}
                  </MDBox>
                </MDBox>
              </Grid>
            </Grid>
          </Container>
          <MDBox
            sx={{
              position: "absolute",
              left: "0",
              top: "0",
              // width: "100%",
              // height: "100vh",
              zIndex: "-1",
            }}
          >
            <img className="homebg" src={homeBg} alt="home background" />
            {/* <video
              ref={videoRef}
              style={{ width: "100%" }}
              autoPlay={true}
              loop
              muted
              src={video}
            ></video> */}
          </MDBox>
        </MDBox>
      </MDBox>
      <Grid container sx={{ px: 6, m: 8 }}>
        <Grid item xs={12}>
          <MDBox minWidth={{ xs: "22rem", md: "25rem" }} mx="auto"></MDBox>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
