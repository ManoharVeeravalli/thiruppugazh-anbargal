import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import { items } from "../lib/drawer";
import Link from "next/link";
import { Box, Paper } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Center } from "./common";

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
    },
  })
);

export default function Layout(props: any) {
  const classes = useStyles();
  const { asPath } = useRouter();
  return (
    <>
      <div className={classes.root}>
        <header>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Thiruppugazh Anbargal
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <Paper>
              <List>
                {items.map(({ text, icon: Icon, link }) => (
                  <Link href={link} passHref key={text} scroll={false}>
                    <ListItem button selected={link === asPath} divider>
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
          <Box p={5}>
            <Center>
              <Typography variant="subtitle2">
                Copyright © 2021 by Thiruppugazh Anbargal. All rights reserved.
              </Typography>
            </Center>
          </Box>
        </main>
      </div>
    </>
  );
}
