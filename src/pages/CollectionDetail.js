import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import Header from "../components/Header";

export default function ArtworkDetail({ collectionName, collectionImages }) {
  const collection = {
    title: "Collection #1",
  };
  const collection_images = [
    "/artworks/rene-magritte.webp",
    "/artworks/rene-magritte.webp",
    "/artworks/rene-magritte.webp",
    "/artworks/rene-magritte.webp",
    "/artworks/rene-magritte.webp",
    "/artworks/rene-magritte.webp",
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
            {collection.title}
          </Typography>
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
          {collection_images.map((collectionImage) => (
            <Grid item>
              <Card sx={{ maxWidth: 400, width: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400"
                    image={collectionImage}
                    alt="artwork"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
