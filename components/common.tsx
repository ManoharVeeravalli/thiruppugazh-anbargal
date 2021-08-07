import { Grid, Typography } from "@material-ui/core";

export const IST = 86400;

export function Center(props: any) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {props.children}
    </Grid>
  );
}

export function Heading({ text }: { text: string }) {
  return (
    <Typography gutterBottom variant="h4" component="h1">
      {text}
    </Typography>
  );
}

export function SubHeading({ text }: { text: string }) {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      {text}
    </Typography>
  );
}
