import {
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import Header from "../components/Header";

export default function UploadArtwork() {
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
              height: "60vh",
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
            />{" "}
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
            <Button
              variant="contained"
              sx={{ width: "40%", backgroundColor: "#246d82" }}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
