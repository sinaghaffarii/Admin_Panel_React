import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from "classnames";
import { Box, IconButton, Link } from "@material-ui/core";
import Icon from "@mdi/react";
import BookList from '../../pages/bookList/BookList'
import EditBook from "../../pages/bookList/EditBook";

//icons
import {
  mdiGithub as GithubIcon,
} from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/notifications" component={Notifications} />
            <Route path="/app/booklist" component={BookList} />
            <Route path="/app/editbook" component={EditBook} />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/ui/charts" component={Charts} />
          </Switch>
          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
              <Link href={"https://github.com/sinaghaffarii"} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
