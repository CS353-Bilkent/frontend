import { Grid, Typography, Paper, TextField, Button } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInterceptor";

export default function ArtworkDetail() {
  const [artwork, setArtwork] = useState([]);
  const [artworkTitle, setArtworkTitle] = useState("");
  const [artworkArtist, setArtworkArtist] = useState("");
  const [artworkDesc, setArtworkDesc] = useState("");
  const artworkId =
    window.location.pathname.split("/").length >= 3
      ? window.location.pathname.split("/")[2]
      : null;

  useEffect(() => {
    axiosInstance
      .get(`/art/details/${artworkId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setArtwork(response.data.data);
        setArtworkTitle(response.data.data.artworkDto.artworkName);
        setArtworkArtist(response.data.data.artworkDto.artistName);
        setArtworkDesc(response.data.data.artworkDto.artworkDescription);
        console.log("artwork", response.data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, [artworkId]);

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
          <img
            width={"100%"}
            src={`data:image/jpeg;base64,${artwork.displayImage}`}
            alt={"ojkeg"}
          />
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
            {artworkTitle || "Artwork Loading..."}
          </Typography>
          <Typography sx={{ fontFamily: "Segou UI", fontSize: "32px" }}>
            {artworkArtist || "Artist Loading..."}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Segou UI",
              fontSize: "20px",
              color: "#B3B3B3",
              textAlign: "start",
            }}
          >
            {artworkDesc || "Description Loading..."}
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
