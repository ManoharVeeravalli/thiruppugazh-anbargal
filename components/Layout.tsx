import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import CloseIcon from "@material-ui/icons/Close";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { items } from "../lib/drawer";
import Link from "next/link";
import { Avatar, Box, Grid, Paper } from "@material-ui/core";
import { auth } from "../lib/firebase";
import { Copyright, getUsernameFromEmail, GoogleSignIn } from "./common";

const drawerWidth = 340;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
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
      <div className={classes.main}>
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
                <Link
                  href={`/${getUsernameFromEmail(`${user.email}`)}`}
                  passHref
                >
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
                {items.map((item) => {
                  if (item.link) {
                    return <ListItemLink asPath={asPath} item={item} toggleDrawer={toggleDrawer} />
                  }
                  return <ListItemWithSubItems item={item} asPath={asPath} toggleDrawer={toggleDrawer}/>

                })}
              </List>
            </Paper>
            <Divider />
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toaster />
          <Toolbar />
          {props.children}
          <Copyright />
        </main>
      </div>
    </>
  );
}

function ListItemLink({ item, asPath, toggleDrawer, isChild = false }: { item: any, asPath: string, toggleDrawer: (state: boolean) => () => void, isChild?: boolean }) {
  const { text, link } = item;
  return (<Link href={`${link}`} passHref key={text}>
    <ListItem
      style={isChild ? { paddingLeft: '40px' }: {}}
      button
      selected={link === asPath}
      divider
      onClick={toggleDrawer(false)}
    >
      <ListItemText primary={text} />
      <hr />
    </ListItem>
  </Link>)
}

function ListItemWithSubItems({ item, asPath, toggleDrawer }: { item: any, asPath: string, toggleDrawer: (state: boolean) => () => void }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem button divider onClick={handleClick}>
        <ListItemText primary={item.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items.map((item: any) => <ListItemLink asPath={asPath} item={item} toggleDrawer={toggleDrawer} isChild />)}
        </List>
      </Collapse>
    </>
  );
}
