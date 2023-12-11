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

export default function UploadArtwork() {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  const handleImageUpload = (event) => {
    const formData = new FormData();
    formData.append("Image", image);

    fetch("https://httpbin.org/post", {
      method: "POST",
      body: formData,
    }).catch((error) => {
      console.error(error);
    });
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
              id="outlined-basic"
              label="Artwork Title"
              variant="outlined"
              sx={{ width: "30%" }}
              placeholder="Enter your artwork title here"
            />
            <TextField
              id="outlined-multiline-static"
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
                id="outlined-basic"
                label="Artwork Type"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter artwork type"
              />
              <TextField
                id="outlined-basic"
                label="Rarity"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter rarity"
              />
              <TextField
                id="outlined-basic"
                label="Medium"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter medium"
              />
              <TextField
                id="outlined-basic"
                label="Movement"
                variant="outlined"
                sx={{ width: "20%" }}
                placeholder="Enter movement"
              />
              <TextField
                id="outlined-basic"
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
                id="outlined-basic"
                label="Size (X)"
                variant="outlined"
                sx={{ width: "15%" }}
                placeholder="Enter material"
              />
              <TextField
                id="outlined-basic"
                label="Size (Y)"
                variant="outlined"
                sx={{ width: "15%" }}
                placeholder="Enter material"
              />
              <TextField
                id="outlined-basic"
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
                id="outlined-basic"
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
                  id="outlined-basic"
                  label="Initial Bid"
                  variant="outlined"
                  sx={{ width: "20%" }}
                  placeholder="Set initial bid"
                />
                <TextField
                  id="outlined-basic"
                  label="Auction Start Date"
                  variant="outlined"
                  sx={{ width: "30%" }}
                  placeholder="Set Start Date"
                />
                <TextField
                  id="outlined-basic"
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
              <img src={file} width={"100"} />
              <input type="file" onChange={handleChange} />
            </Grid>
            <Button
              variant="contained"
              sx={{ width: "40%", backgroundColor: "#246d82" }}
              onClick={handleImageUpload}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
