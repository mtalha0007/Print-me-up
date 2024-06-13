import React, { Fragment } from 'react';
import { PrimaryButton } from '../../../components/Buttons';
import { Avatar, Box, CardMedia, Container, Divider, Grid, Typography } from '@mui/material';
import { East, Star } from '@mui/icons-material';
import Colors from '../../../assets/styles';
import Images, { NoCharges, Printing, Payment, CustomStyle, Delivery, Order } from '../../../assets/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../../../../App.css";
import "@fontsource/plus-jakarta-sans"

function Home() {

  const productBoxes = [
    {
      icon: <NoCharges />,
      title: "No Die & plate charges",
      description: "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
    },
    {
      icon: <Printing />,
      title: "High quality printing",
      description: "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
    },
    {
      icon: <Payment />,
      title: "Secure payment",
      description: "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
    },
    {
      icon: <CustomStyle />,
      title: "Custom Size & Style",
      description: "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
    },
    {
      icon: <Delivery />,
      title: "Fast & Free Delivery",
      description: "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
    },
    {
      icon: <Order />,
      title: "Low Minimum Order",
      description: "Lorem ipsum det, cowec tetur duis necgi det, consect eturlagix adipiscing eliet duis necgi det, con"
    },
  ]

  const reviewBoxes = [
    {
      avatar: Images.avatar1,
      name: "Cristian L.",
      designation: "Manager",
      comments: "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome."
    },
    {
      avatar: Images.avatar2,
      name: "Cristian L.",
      designation: "Manager",
      comments: "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome."
    },
    {
      avatar: Images.avatar3,
      name: "Cristian L.",
      designation: "Manager",
      comments: "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome."
    },
    {
      avatar: Images.avatar1,
      name: "Cristian L.",
      designation: "Manager",
      comments: "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome."
    },
    {
      avatar: Images.avatar2,
      name: "Cristian L.",
      designation: "Manager",
      comments: "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome."
    },
    {
      avatar: Images.avatar3,
      name: "Cristian L.",
      designation: "Manager",
      comments: "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome."
    },
  ];

  return (
    <Fragment>
      <Box
        component={"section"}
        sx={{
          p: { md: "60px", sm: 0, xs: 0 },
          mt: "90px",
          mb: "60px"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "-30%",
            top: 0,
            background: Colors.secondary,
            opacity: 0.2,
            width: "50%",
            height: "25%",
            borderRadius: "50%",
            filter: "blur(200px)",
          }}
        />
        <Container>
          <Grid container justifyContent={"center"}>
            <Grid item md={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { md: "flex-start", sm: "center", xs: "center" },
                  gap: "16px"
                }}
              >
                <Typography variant='h3' sx={{ color: Colors.textColor1, lineHeight: 1 }}>Make the Most</Typography>
                <Typography
                  className={"banner-text"}
                  sx={{
                    fontSize: {
                      md: "60px",
                      sm: "56px",
                      xs: "56px"
                    }
                  }}
                >
                  Designer Ideas
                </Typography>
                <Typography variant='h3' sx={{ color: Colors.textColor1, lineHeight: 1 }}>Print T-Shirts!</Typography>
                <Box sx={{ pr: { md: "160px", sm: 0, sx: 0 } }}>
                  <Typography variant='caption' sx={{ color: Colors.textColor1, lineHeight: 1 }}>
                    What’s more, we do it right! A full administration printing background. Print shirts for yourself or your online business
                  </Typography>
                </Box>
                <PrimaryButton
                  title={"Get Started"}
                  icon={<East />}
                />
                <Box sx={{
                  display: "flex",
                  gap: "24px"
                }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Typography
                      className={'banner-text'}
                      sx={{
                        lineHeight: "1 !important",
                        fontSize: "36px !important",
                        fontWeight: "900 !important"
                      }}
                    >
                      12K+
                    </Typography>
                    <Typography sx={{ color: Colors.textColor1 }}>Collections</Typography>
                  </Box>
                  <Divider
                    sx={{
                      borderColor: Colors.secondary,
                      borderWidth: "2px",
                      borderRadius: "4px",
                      height: "30px",
                      alignSelf: "center"
                    }}
                    orientation="vertical"
                    flexItem
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column"
                    }}
                  >
                    <Typography
                      className={'banner-text'}
                      sx={{
                        lineHeight: "1 !important",
                        fontSize: "36px !important",
                        fontWeight: "900 !important"
                      }}
                    >
                      100K+
                    </Typography>
                    <Typography sx={{ color: Colors.textColor1 }}>Items Delivered</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box>
                <CardMedia
                  component={"img"}
                  src={Images.bannerImage}
                  sx={{
                    width: "85%",
                    objectFit: "contain",
                    m: "0 auto"
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component={"section"}
        sx={{
          p: { md: "60px", sm: 0, xs: 0 },
          my: { md: 0, sm: "60px", xs: "60px" }
        }}
      >
        <Container>
          <Grid container justifyContent={"center"} rowGap={"30px"}>
            <Grid item md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ color: Colors.textColor1 }}>
                  “We've got custom T-shirts in a range of fits and sizes, so everyone can wear your brand or message.”
                </Typography>
              </Box>
            </Grid>
            <Grid item md={10}>
              <Box>
                <CardMedia
                  component={"img"}
                  src={Images.brands}
                  sx={{
                    width: "100%",
                    objectFit: "contain"
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component={"section"}
        sx={{
          p: { md: "60px", sm: 0, xs: 0 },
          my: { md: 0, sm: "60px", xs: "60px" }
        }}
      >
        <Container>
          <Grid container justifyContent={"center"} spacing={{ md: 0, sm: 2, xs: 2 }}>
            <Grid item md={5}>
              <Box>
                <CardMedia
                  component={"img"}
                  src={Images.productDesign}
                  sx={{
                    width: "100%",
                    objectFit: "contain"
                  }}
                />
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: { md: "flex-start", sm: "center", xs: "center" },
                  gap: "20px",
                  pl: { md: 1, sm: 0, xs: 0 }
                }}
              >
                <Typography
                  sx={{
                    fontSize: { md: "40px", sm: "34px", xs: "34px" },
                    color: Colors.textColor1,
                    lineHeight: 1
                  }}
                >
                  Easily add your
                </Typography>
                <Typography
                  className={"banner-text"}
                  sx={{
                    fontSize: { md: "40px", sm: "34px", xs: "34px" },
                    fontWeight: "600 !important",
                    lineHeight: "1.25 !important"
                  }}
                >
                  Design to your Products
                </Typography>
                <Box sx={{ pr: { md: "115px", sm: 0, xs: 0 } }}>
                  <Typography sx={{ color: Colors.textColor1 }}>
                    With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
                  </Typography>
                </Box>
                <PrimaryButton
                  title={"All Products"}
                  icon={<East />}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "80%",
          top: "20%",
          background: Colors.secondary,
          opacity: 0.2,
          width: "25%",
          height: "25%",
          borderRadius: "50%",
          filter: "blur(200px)",
        }}
      />
      <Box
        component={"section"}
        sx={{
          p: { md: "60px", sm: 0, xs: 0 },
          my: { md: 0, sm: "60px", xs: "60px" },
        }}
      >
        <Container>
          <Grid container justifyContent={"center"} spacing={{ md: 0, sm: 2, xs: 2 }}>
            <Grid item md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: { md: "flex-start", sm: "center", xs: "center" },
                  gap: "20px",
                  pr: { md: 3, sm: 0, xs: 0 }
                }}
              >
                <Typography
                  className={"banner-text"}
                  sx={{
                    fontSize: "40px !important",
                    fontWeight: "600 !important",
                    lineHeight: "1.25 !important"
                  }}
                >
                  T-shirt printing
                </Typography>
                <Typography
                  sx={{
                    fontSize: "40px",
                    color: Colors.textColor1,
                    lineHeight: 1
                  }}
                >
                  made easy.
                </Typography>
                <Box>
                  <Typography sx={{ color: Colors.textColor1 }}>
                    Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix adipiscing eliet, cowec tetopak
                  </Typography>
                </Box>
                <Box
                  sx={{
                    maxWidth: "fit-content",
                    p: 2,
                    border: `1px solid ${Colors.secondary}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: Colors.secondary,
                      fontWeight: 600,
                      fontSize: "20px"
                    }}
                  >
                    Premium quality custom t-shirts
                  </Typography>
                  <Typography
                    sx={{ color: Colors.secondary }}>
                    Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: Colors.textColor1,
                    fontSize: "20px"
                  }}
                >
                  Easy to create & customize
                </Typography>
                <Typography
                  sx={{
                    color: Colors.textColor1,
                    fontSize: "20px"
                  }}
                >
                  Thousands of free templates
                </Typography>
                <Typography
                  sx={{
                    color: Colors.textColor1,
                    fontSize: "20px"
                  }}
                >
                  Free standard shipping
                </Typography>
              </Box>
            </Grid>
            <Grid item md={5}>
              <Box>
                <CardMedia
                  component={"img"}
                  src={Images.easyPrinting}
                  sx={{
                    width: "100%",
                    objectFit: "contain"
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component={"section"}
        sx={{
          p: { md: "60px", sm: 0, xs: 0 },
          my: { md: 0, sm: "60px", xs: "60px" }
        }}
      >
        <Container>
          <Grid container justifyContent={"center"} rowGap={"20px"}>
            <Grid item md={9}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "44px",
                    color: Colors.textColor1,
                    textAlign: "center"
                  }}
                >
                  Why customize{" "}
                  <Typography component={"span"}
                    sx={{
                      fontSize: "44px",
                    }}
                    className={"banner-text text-small"}
                  >
                    Products
                  </Typography>
                  {" "}with AI Shirt?
                </Typography>
              </Box>
            </Grid>
            <Grid item md={7}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant='body2' sx={{ color: Colors.textColor1 }}>
                  Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet duis necgi det, con
                </Typography>
              </Box>
            </Grid>
            <Grid item md={9}>
              <Grid container spacing={2}>
                {productBoxes.map((item, ind) => (
                  <Grid key={ind} item md={4} sm={6} xs={12}>
                    <Box
                      sx={{
                        background: Colors.secondary,
                        borderRadius: "15px",
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        gap: "24px"
                      }}
                    >
                      {item.icon}
                      <Typography
                        variant={"body1"}
                        sx={{
                          fontWeight: 600,
                          color: Colors.backgroundColor1
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant={"body2"}
                        sx={{
                          fontFamily: "Plus Jakarta Sans",
                          color: Colors.backgroundColor1
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component={"section"}
        sx={{
          p: { md: "60px", sm: 0, xs: 0 },
          my: { md: 0, sm: "60px", xs: "60px" }
        }}
      >
        <Container>
          <Grid container justifyContent={"center"} rowGap={"20px"}>
            <Grid item md={9}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "44px !important",
                    color: Colors.textColor1,
                    textAlign: "center"
                  }}
                >
                  What&nbsp;
                  <span
                    className={"banner-text text-small"}
                  >
                    People
                  </span>
                  &nbsp;Are Saying
                </Typography>
              </Box>
            </Grid>
            <Grid item md={7}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant='body2' sx={{ color: Colors.textColor1 }}>
                  We provide support for more than 15K+ Businesses.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Swiper
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                  320: {
                    slidesPerView: 1
                  },
                  786: {
                    slidesPerView: 2
                  },
                  1080: {
                    slidesPerView: 3
                  }
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {reviewBoxes.map((item, ind) => (
                  <SwiperSlide key={ind}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: "15px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-end",
                          gap: "12px"
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 64,
                            height: 64
                          }}
                          src={item.avatar}
                          alt={`avatar${ind}`}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column"
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Plus Jakarta Sans",
                              display: 'flex',
                              alignItems: "center",
                              gap: "8px",
                              fontWeight: 600
                            }}
                          >
                            {item.name}
                            <Typography
                              variant='body2'
                              sx={{ fontWeight: 400 }}
                            >
                              {item.designation}
                            </Typography>
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                            }}
                          >
                            <Star sx={{ width: "16px", height: "16px", color: "#FCB61A" }} />
                            <Star sx={{ width: "16px", height: "16px", color: "#FCB61A" }} />
                            <Star sx={{ width: "16px", height: "16px", color: "#FCB61A" }} />
                            <Star sx={{ width: "16px", height: "16px", color: "#FCB61A" }} />
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        variant={"body2"}
                        sx={{
                          fontFamily: "Plus Jakarta Sans",
                        }}
                      >
                        {item.comments}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Home