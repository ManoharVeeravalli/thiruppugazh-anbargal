import { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import CloseIcon from "@material-ui/icons/Close";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { items } from "../lib/drawer";
import Link from "next/link";
import { Avatar, Box, Grid, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { auth } from "../lib/firebase";
import { Copyright, GoogleSignIn } from "./common";

const drawerWidth = 340;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      overflow: "auto",
      padding: theme.spacing(3),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(1),
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Layout(props: any) {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const { asPath } = useRouter();
  const matches = useMediaQuery("(min-width:960px)");
  const [user] = useAuthState(auth);
  useEffect(() => {
    setState(false);
  }, [matches]);

  const toggleDrawer = (open: boolean) => () => {
    setState(open);
  };

  return (
    <>
      <div className={classes.root}>
        <header>
          <AppBar position="fixed" className={classes.appBar} color={"default"}>
            <Toolbar>
              {!matches && (
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Typography
                variant="h6"
                noWrap
                component="h1"
                className={classes.title}
              >
                Thiruppugazh Anbargal
              </Typography>
              {!user && <GoogleSignIn />}
              {user && (
                <Link href={`/${user.uid}`} passHref>
                  <Avatar
                    alt={user.displayName ?? `Anonymous`}
                    src={user.photoURL ?? ``}
                    className="cursor-pointer"
                  />
                </Link>
              )}
            </Toolbar>
          </AppBar>
        </header>
        <Drawer
          className={matches ? classes.drawer : ``}
          variant={matches ? `permanent` : `temporary`}
          anchor="top"
          open={state}
          onClose={toggleDrawer(false)}
          classes={
            matches
              ? {
                  paper: classes.drawerPaper,
                }
              : {}
          }
        >
          {matches && <Toolbar />}
          <div className={classes.drawerContainer}>
            <Paper>
              {!matches && (
                <Box p={1}>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography
                        variant="h6"
                        noWrap
                        component="h1"
                        className={classes.title}
                      >
                        Thiruppugazh Anbargal
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              )}
              <List>
                {items.map(({ text, icon: Icon, link }) => (
                  <Link href={link} passHref key={text}>
                    <ListItem
                      button
                      selected={link === asPath}
                      divider
                      onClick={toggleDrawer(false)}
                    >
                      <ListItemIcon>
                        <Icon
                          color={link === asPath ? "primary" : "inherit"}
                          style={link === asPath ? {} : { color: grey[900] }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      <hr />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Paper>
            <Divider />
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          {props.children}
          <Copyright />
        </main>
      </div>
    </>
  );
}
