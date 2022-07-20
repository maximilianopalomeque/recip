import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => (
  <Grid
    item
    container
    xs={12}
    sx={{ backgroundColor: "#FF5D5D", minHeight: "50px" }}
    p={2}
  >
    <Grid item container xs={6}>
      <Typography color="white">Recip - 2022</Typography>
    </Grid>

    <Grid item xs={6} container justifyContent="right">
      <a
        href="https://github.com/maximilianopalomeque"
        rel="noopener"
        aria-label="Github"
        style={{ maxHeight: "10px" }}
      >
        <GitHubIcon sx={{ color: "white" }} />
      </a>
    </Grid>
  </Grid>
);

export default Footer;
