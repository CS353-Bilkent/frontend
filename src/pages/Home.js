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
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
    },
    {
      title: "Wheat Field with Cypresses",
      artist: "Vincent Van Gogh",
      description:
        "Cypresses gained ground in Van Gogh’s work by late June 1889 when he resolved to devote one of his first series in Saint-Rémy to the towering trees. Distinctive for their rich impasto, his exuberant on-the-spot studies include the Met’s close-up vertical view of cypresses (49.30) and this majestic horizontal composition, which he illustrated in reed-pen drawings sent to his brother on July 2. Van Gogh regarded the present work as one of his “best” summer landscapes and was prompted that September to make two studio renditions: one on the same scale (National Gallery, London) and the other a smaller replica, intended as a gift for his mother and sister (private collection).",
      image: "/artworks/wheat_fields.jpeg",
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
