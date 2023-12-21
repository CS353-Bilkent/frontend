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
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInterceptor";

export default function Home() {
  const navigate = useNavigate();
  const [artworks, setArtworks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/art/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setArtworks(response.data.data.artworkDtos);
        console.log("artworks", response.data.data.artworkDtos);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredArtworks = artworks.filter((artwork) =>
    artwork.artworkDto.artworkName.toLowerCase().includes(searchTerm)
  );

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
            Explore and Embrace Art in Artion
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
              placeholder="Search Artworks"
              inputProps={{ "aria-label": "Search artworks" }}
              onChange={handleSearchChange} // Add onChange event
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
          {filteredArtworks.map((artwork) => (
            <Grid
              key={artwork.artworkDto.artworkId}
              item
              onClick={() =>
                navigate(`/artwork-detail/${artwork.artworkDto.artworkId}`)
              }
            >
              <Card sx={{ maxWidth: 400, width: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={`data:image/jpeg;base64,${artwork.displayImage}`}
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
                      {artwork.artworkDto.artworkName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {artwork.artworkDto.artistName}
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
