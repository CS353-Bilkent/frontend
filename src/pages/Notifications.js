import { Grid, Typography, Paper } from "@mui/material";
import Header from "../components/Header";

export default function Notifications() {
  const notifications = [
    { content: "Emre B. bidded on your artwork 'The Tortoise Trainer'." },
    { content: "Emre B. bidded on your artwork 'The Tortoise Trainer'." },
    { content: "Emre B. bidded on your artwork 'The Tortoise Trainer'." },
    { content: "Emre B. bidded on your artwork 'The Tortoise Trainer'." },
    { content: "Emre B. bidded on your artwork 'The Tortoise Trainer'." },
    { content: "Emre B. bidded on your artwork 'The Tortoise Trainer'." },
    { content: "Emre B. bidded on your artwork 'The Tortoise Trainer'." },
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
            gap: "3vh",
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
            Notifications
          </Typography>
          {notifications.map((notification) => (
            <Grid
              component={Paper}
              sx={{
                p: 2,
                minWidth: "40vw",
              }}
            >
              <Typography>{notification.content}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
