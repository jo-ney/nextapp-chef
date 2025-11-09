import { Grid, Typography, Box, CircularProgress } from "@mui/material";
import { Instagram, YouTube, FacebookOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for all resources (including images) to load
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      // If page already loaded (like on fast reload)
      handleLoad();
    } else {
      // Otherwise wait for the load event
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            textAlign: "center",
            alignContent: "center",
            height: "100%",
          }}
        >
          <CircularProgress size={65} sx={{ color: "#E25C07" }} />
        </Box>
      ) : (
        <Grid
          container
          sx={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* <h1 style={{
                color: '#E25C07',
                position: 'absolute',
                fontSize: '600px',
                top: '200px',
                right: '1000px',
                zIndex: 0
            }}>O</h1> */}

            <div
              style={{
                position: "fixed",
                top: "80%",
                right: "75%",
                transform: "translateY(-50%)",
                width: "45vw",
                height: "45vw",
                borderRadius: "50%",
                border: "58px solid #E25C07",
                borderTopColor: "#E25C07",
                borderRightColor: "#E25C07",
                pointerEvents: "none",
                zIndex: 0,
              }}
            ></div>

            <img
              src="/images/chef.jpg"
              alt="Chef Image"
              style={{
                width: "75%",
                borderRadius: "5px",
                zIndex: 1,
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7.5 }} alignContent={"center"}>
            <Grid
              sx={{
                height: { md: "70%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Grid textAlign={"center"}>
                <img
                  src="/images/logo.png"
                  alt="Logo Image"
                  style={{
                    width: "100px",
                    borderRadius: "5px",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  color: "#555555",
                }}
              >
                <Typography
                  textAlign={"center"}
                  sx={{
                    fontSize: "1.1rem",
                    letterSpacing: "-1px",
                    mt: { md: "20px" },
                  }}
                >
                  We're Still
                </Typography>
                <Typography
                  textAlign={"center"}
                  sx={{
                    fontSize: { xs: "3rem", md: "4.5rem" },
                    fontWeight: 900,
                    letterSpacing: { xs: "-3px", md: "-5px" },
                    background: "linear-gradient(90deg, #909090, #2B2B2B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: { xs: "60px", md: "100px" },
                  }}
                >
                  Cooking Our Website.
                </Typography>
                <Typography
                  textAlign={"center"}
                  sx={{
                    fontSize: "1.1rem",
                    letterSpacing: "-1px",
                    mt: { md: "10px" },
                  }}
                >
                  We are going to launch our website{" "}
                  <span style={{ color: "#E25C07" }}>Very Soon,</span>
                </Typography>
                <Typography
                  textAlign={"center"}
                  sx={{
                    fontSize: "1.1rem",
                    letterSpacing: "-1px",
                    mt: { md: "10px" },
                  }}
                >
                  Stay Tune.
                </Typography>
              </Grid>

              <Grid
                sx={{
                  display: { md: "none" },
                  textAlign: "center",
                  my: "10px",
                }}
              >
                <img
                  src="/images/chef.jpg"
                  alt="Chef Image"
                  style={{
                    width: "50%",
                    borderRadius: "5px",
                    zIndex: 1,
                  }}
                />
              </Grid>

              <Grid
                sx={{
                  color: "#4C4C4C",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "15px",
                  mt: { md: "30px" },
                }}
              >
                <a
                  href="https://www.instagram.com/chefgocool?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    sx={{
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      fontSize: "30px",
                      "&:hover": { color: "#FE0575", transform: "scale(1.5)" },
                    }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@ChefGoCool"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTube
                    sx={{
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      fontSize: "40px",
                      "&:hover": { color: "#FF0000", transform: "scale(1.5)" },
                    }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/1CncSMgPnu/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookOutlined
                    sx={{
                      transition: "all 0.2s ease",
                      cursor: "pointer",
                      fontSize: "33px",
                      "&:hover": { color: "#0766FF", transform: "scale(1.5)" },
                    }}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
