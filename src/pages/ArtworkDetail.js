import { Grid, Typography, Paper, TextField, Button } from "@mui/material";
import Header from "../components/Header";

export default function ArtworkDetail({
  imageName,
  imagePath,
  imageDescription,
  imageArtist,
  imagePrice,
  imageCategory,
}) {
  const artwork = {
    title: "Wheat Field with Cypresses",
    title_path: "wheat-field-with-cypresses",
    artist: "Vincent Van Gogh",
    description:
      "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
    image: "/artworks/wheat_fields.jpeg",
  };
  return (
    <>
      <Header />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 10,
          p: 2,
          paddingTop: 10,
          width: "100vw",
          height: "93vh",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Grid
          component={Paper}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            width: "40%",
            height: "70%",
          }}
        >
          <img width={"100%"} src={artwork.image} alt={imageName} />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 3,
            p: 4,
            width: "50%",
            minHeight: "70%",
          }}
          component={Paper}
        >
          <Typography
            sx={{ fontFamily: "Segou UI", fontSize: "42px", fontWeight: "600" }}
          >
            {artwork.title}
          </Typography>
          <Typography sx={{ fontFamily: "Segou UI", fontSize: "32px" }}>
            {artwork.artist}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Segou UI",
              fontSize: "20px",
              color: "#B3B3B3",
              textAlign: "start",
            }}
          >
            {artwork.description}
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              p: 2,
              width: "90%",
              height: "10%",
              alignSelf: "center",
              marginTop: "40px",
              boxShadow: 3,
            }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Bid"
              placeholder="Enter bid!"
              sx={{ width: "50%" }}
            />
            <Button sx={{ backgroundColor: "#246d82" }} variant="contained">
              Submit Bid
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
