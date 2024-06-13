import React from 'react';
import { Box, Button, CardMedia, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import Colors from '../../../assets/styles';
import Images from '../../../assets/images';
import { East } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        backgroundColor: Colors.backgroundColor2,
        pt: "60px",
        pb: "20px",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          sx={{ rowGap: "80px" }}
        >
          <Grid item md={12} sm={12} xs={12}>
            <Grid container sx={{ rowGap: "32px" }}>
              <Grid item md={3} sm={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    alignItems: { xs: "center", sm: "flex-start", md: "flex-start" }
                  }}
                >
                  <CardMedia component={"img"} src={Images.logo} sx={{ width: "60%", objectFit: "contain" }} />
                  <Typography sx={{ color: Colors.textColor1 }}>
                    hello@aishirt.co
                  </Typography>
                  <Typography sx={{ color: Colors.secondary }}>
                    +02 306 038 3996
                  </Typography>
                  <Typography sx={{ color: Colors.textColor1 }}>
                    3665 Paseo Place, Suite 0960, San Diego
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={2} sm={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: { xs: "center", sm: "flex-start", md: "flex-start" }
                  }}
                >
                  <Typography sx={{ color: Colors.secondary, fontWeight: 600 }}>Information</Typography>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>About us</Button>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>Our Blog</Button>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>Start a Return</Button>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>Contact Us</Button>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>Shipping FAQ</Button>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    alignItems: { xs: "center", sm: "flex-start", md: "flex-start" }
                  }}
                >
                  <Typography sx={{ color: Colors.secondary, fontWeight: 600 }}>Useful Links</Typography>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>My Account</Button>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>Print Provider</Button>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>Become a Partner</Button>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>Custom Products</Button>
                  <Button sx={{ color: Colors.textColor1, textTransform: "capitalize" }}>Make your own shirt</Button>
                </Box>
              </Grid>
              <Grid item md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    alignItems: { xs: "center", sm: "flex-start", md: "flex-start" }
                  }}
                >
                  <Typography sx={{ color: Colors.secondary, fontWeight: 600 }}>NewsLetter</Typography>
                  <Typography sx={{ color: Colors.textColor1 }}>
                    Get the latest news, event & more delivered to your inbox.
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{
                      backgroundColor: Colors.textColor1,
                      borderRadius: "4px"
                    }}
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <East sx={{ color: Colors.secondary }} />
                        </IconButton>
                      )
                    }}
                    placeholder="Your email address"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} sm={12} sx={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                <CardMedia component={"img"} src={Images.footerPayment} sx={{ width: "30%", objectFit: "contain" }} />
                <Typography sx={{ color: Colors.textColor2 }}>© 2024 AI Shirt. All rights reserved.</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer