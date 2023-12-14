import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import {
  ARTWORK_MATERIAL,
  ARTWORK_MEDIUM,
  ARTWORK_MOVEMENT,
  ARTWORK_RARITY,
  ARTWORK_TYPE,
} from "../utility/artworkDetailMap";
import axiosInstance from "../service/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function UploadArtwork() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const navigate = useNavigate();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  const handleUpload = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      image: image,
      name: data.get("artwork-title"),
      userId: "1234",
      artistId: "1234",
      fixedPrice: data.get("reserve-price"),
      artworkTypeId: ARTWORK_TYPE[data.get("artwork-type")],
      timePeriod: "1234",
      rarityId: ARTWORK_RARITY[data.get("rarity")],
      mediumId: ARTWORK_MEDIUM[data.get("medium")],
      sizeX: data.get("size-x"),
      sizeY: data.get("size-y"),
      sizeZ: data.get("size-z"),
      materialId: ARTWORK_MATERIAL[data.get("material")],
      artworkLocation: "Istanbul",
      artMovementId: ARTWORK_MOVEMENT[data.get("movement")],
      acquisitionWay: "1234",
      artworkDescription: data.get("description"),
    });

    try {
      console.log("handleupload");
      const res = await axiosInstance.post(
        "/art/upload",
        {
          image: image,
          name: data.get("artwork-title"),
          userId: "1234",
          artistId: "1234",
          fixedPrice: data.get("reserve-price"),
          artworkTypeId: ARTWORK_TYPE[data.get("artwork-type")],
          timePeriod: "1234",
          rarityId: ARTWORK_RARITY[data.get("rarity")],
          mediumId: ARTWORK_MEDIUM[data.get("medium")],
          sizeX: data.get("size-x"),
          sizeY: data.get("size-y"),
          sizeZ: data.get("size-z"),
          materialId: ARTWORK_MEDIUM[data.get("material")],
          artworkLocation: "Istanbul",
          artMovementId: ARTWORK_MOVEMENT[data.get("movement")],
          acquisitionWay: "1234",
          artworkDescription: data.get("description"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("res", res);
      navigate("/home");
    } catch (err) {
      console.log("err", err);
      throw new Error("Cannot upload!");
    }
  };

  return (
    <>
      <Header />
      <Grid
        container
        component="form"
        onSubmit={handleUpload}
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
        <Typography
          sx={{
            fontFamily: "Segoe UI",
            fontWeight: 700,
            fontSize: 42,
            marginTop: "2vh",
          }}
        >
          Upload Artwork
        </Typography>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            p: 3,
            width: "100vw",
          }}
        >
          <Grid
            component={Paper}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              height: "80vh",
              width: "80%",
              borderRadius: 5,
              boxShadow: 3,
            }}
          >
            <TextField
              id="artwork-title"
              name="artwork-title"
              label="Artwork Title"
              variant="outlined"
              sx={{ width: "30%" }}
              placeholder="Enter your artwork title here"
            />
            <TextField
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              placeholder="Tell us about your artwork!"
              sx={{ width: "50%" }}
            />
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                p: 3,
                width: "100%",
              }}
            >
              Details:
              <TextField
                id="artwork-type"
                name="artwork-type"
                label="Artwork Type"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter artwork type"
              />
              <TextField
                id="rarity"
                name="rarity"
                label="Rarity"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter rarity"
              />
              <TextField
                id="medium"
                name="medium"
                label="Medium"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter medium"
              />
              <TextField
                id="movement"
                name="movement"
                label="Movement"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter movement"
              />
              <TextField
                id="material"
                name="material"
                label="Material"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter material"
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              Sizes:
              <TextField
                id="size-x"
                name="size-x"
                label="Size (X)"
                variant="outlined"
                sx={{ width: "15%" }}
                placeholder="Enter material"
              />
              <TextField
                id="size-y"
                name="size-y"
                label="Size (Y)"
                variant="outlined"
                sx={{ width: "15%" }}
                placeholder="Enter material"
              />
              <TextField
                id="size-z"
                name="size-z"
                label="Size (Z)"
                variant="outlined"
                sx={{ width: "15%" }}
                placeholder="Enter material"
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Typography>Reserved Price: </Typography>
              <TextField
                id="reserve-price"
                name="reserve-price"
                label="Reserve Price"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Set reserve price"
              />
              <Divider orientation="vertical" flexItem />
              <Typography>Auction: </Typography>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <TextField
                  id="initial-bid"
                  name="initial-bid"
                  label="Initial Bid"
                  variant="outlined"
                  sx={{ width: "20%" }}
                  placeholder="Set initial bid"
                />
                <TextField
                  id="start-date"
                  name="start-date"
                  label="Auction Start Date"
                  variant="outlined"
                  sx={{ width: "30%" }}
                  placeholder="Set Start Date"
                />
                <TextField
                  id="end-date"
                  name="end-date"
                  label="Auction End Date"
                  variant="outlined"
                  sx={{ width: "30%" }}
                  placeholder="Set End Date"
                />
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <img src={file} alt="uploaded" width={"100"} />
              <input type="file" onChange={handleChange} />
            </Grid>
            <Button
              variant="contained"
              sx={{ width: "40%", backgroundColor: "#246d82" }}
              type="submit"
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
