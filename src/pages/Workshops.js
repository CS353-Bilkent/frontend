import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  InputBase,
} from "@mui/material";
import Header from "../components/Header";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  let artworks = [
    {
      title: "What is Art?",
      artist: "Rene Magritte",
      description:
        "This is a workshop that will teach you about the different types of art and how to appreciate them.",
      image: "/artworks/rene-magritte.webp",
    },
    {
      title: "What is Art?",
      artist: "Rene Magritte",
      description:
        "This is a workshop that will teach you about the different types of art and how to appreciate them.",
      image: "/artworks/rene-magritte.webp",
    },
    {
      title: "What is Art?",
      artist: "Rene Magritte",
      description:
        "This is a workshop that will teach you about the different types of art and how to appreciate them.",
      image: "/artworks/rene-magritte.webp",
    },
    {
      title: "What is Art?",
      artist: "Rene Magritte",
      description:
        "This is a workshop that will teach you about the different types of art and how to appreciate them.",
      image: "/artworks/rene-magritte.webp",
    },
    {
      title: "What is Art?",
      artist: "Rene Magritte",
      description:
        "This is a workshop that will teach you about the different types of art and how to appreciate them.",
      image: "/artworks/rene-magritte.webp",
    },
  ];

  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          p: 2,
          paddingTop: "2vh",
          width: "100vw",
          height: "93vh",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            gap: "2vh",
            paddingTop: "2vh",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              fontWeight: 200,
              fontSize: 36,
              marginTop: "2vh",
            }}
          >
            Workshops
          </Typography>
          <Grid>
            <InputBase
              sx={{
                ml: 1,
                flex: 1,
                backgroundColor: "#F5F5F5",
                p: "5px",
                borderRadius: "5px",
                width: "50vw",
              }}
              placeholder="Search Workshops"
              inputProps={{ "aria-label": "Search artworks" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
            width: "100vw",
          }}
        >
          {artworks.map((artwork) => (
            <Grid item>
              <Card sx={{ maxWidth: 400, width: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={artwork.image}
                    alt="artwork"
                  />
                  <CardContent
                    sx={{
                      height: "35px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <Typography
                      gutterBottom
                      fontSize={"24"}
                      fontWeight={700}
                      fontFamily={"Segoe UI"}
                      component="div"
                    >
                      {artwork.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {artwork.artist}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
