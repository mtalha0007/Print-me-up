import React, { useState } from 'react';
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import "../../../../App.css";
import InputField from '../../../components/InputField';
import { SecondaryButton } from '../../../components/Buttons';
import { East, Visibility, VisibilityOff } from '@mui/icons-material';
import Colors from '../../../assets/styles';
import Images, { Google } from '../../../assets/images';

function Login() {

  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <Box
      sx={{
        mt: { md: "80px", sm: 0, xs: 0 }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "-60%",
          top: 0,
          background: Colors.secondary,
          opacity: 0.2,
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          filter: "blur(200px)",
        }}
      />
      <Grid container justifyContent={"center"}>
        <Grid item md={7}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              px: { md: "100px", sm: "50px", xs: "25px" }
            }}
          >
            <Container>
              <Grid
                container
                // height={"100%"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                rowGap={3}
              >
                <Grid item md={12} width={"100%"}>
                  <Typography
                    className={"banner-text"}
                    sx={{
                      fontSize: "40px",
                      textAlign: "center"
                    }}
                  >
                    Welcome Back!
                  </Typography>
                </Grid>
                <Grid item md={12} width={"100%"}>
                  <InputField
                    fullWidth={true}
                    label={"Email Address"}
                    type={"email"}
                  />
                </Grid>
                <Grid item md={12} width={"100%"}>
                  <InputField
                    fullWidth={true}
                    label={"Password"}
                    type={visible ? "text" : "password"}
                    onClick={handleVisibility}
                    icon={visible
                      ? <VisibilityOff sx={{ color: Colors.textColor1 }} />
                      : <Visibility sx={{ color: Colors.textColor1 }} />
                    }
                  />
                </Grid>
                <Grid item md={12} width={"100%"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <SecondaryButton
                      title={"Login"}
                      icon={<East sx={{ color: Colors.white }} />}
                    />
                  </Box>
                </Grid>
                <Grid item md={12} width={"100%"}>
                  <Grid container justifyContent={"center"} alignItems={"center"}>
                    <Grid item md={5}>
                      <Divider
                        sx={{
                          borderColor: Colors.textColor1,
                          borderWidth: "1px"
                        }}
                      />
                    </Grid>
                    <Grid item md={2}>
                      <Typography
                        sx={{
                          color: Colors.textColor1,
                          textAlign: "center"
                        }}
                      >
                        OR
                      </Typography>
                    </Grid>
                    <Grid item md={5}>
                      <Divider
                        sx={{
                          borderColor: Colors.textColor1,
                          borderWidth: "1px"
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} width={"100%"}>
                  <Grid container justifyContent={"center"}>
                    <Grid item md={9}>
                      <Box sx={{
                        display: "flex",
                        justifyContent: "center"
                      }}>
                        <Button
                          variant='container'
                          sx={{
                            background: Colors.white,
                            textTransform: "capitalize",
                            gap: "12px",
                            ":hover": {
                              background: Colors.textColor1,
                              color: Colors.backgroundColor1
                            }
                          }}
                        >
                          <Google />
                          Continue with Google
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} width={"100%"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <Typography
                      sx={{
                        color: Colors.secondary,
                        textDecoration: "underline"
                      }}
                      component={"a"}>
                      Can't log in?
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={12} width={"100%"}>
                  <Typography
                    sx={{
                      color: Colors.textColor1,
                      textAlign: "center",
                      px: { md: "80px", sm: "8px", xs: "8px" }
                    }}
                  >
                    Secure Login with reCAPTCHA subject to
                    Google Terms & Privacy
                  </Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
        <Grid item md={5}>
          <Box
            sx={{
              backgroundImage: `url(${Images.registerImage})`,
              height: "100%",
              width: "100%",
              backgroundSize: "contain",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat"
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Login