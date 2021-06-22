import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  Book,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  
  { id: 0, label: "داشبورد", link: "/app/dashboard", icon: <HomeIcon /> },
  {id: -1 , label : 'لیست کتاب ها' , link: "/app/booklist" , icon: <Book />},
  {
    id: 1,
    label: "تایپوگرافی",
    link: "/app/typography",
    icon: <TypographyIcon />,
  },
  { id: 2, label: "جداول", link: "/app/tables", icon: <TableIcon /> },
  {
    id: 3,
    label: "اعلانات",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
  },
  {
    id: 4,
    label: "امکانات ظاهری",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    children: [
      { label: "آیکون", link: "/app/ui/icons" },
      { label: "نمودارها", link: "/app/ui/charts" },
      { label: "نقشه گوگل", link: "/app/ui/maps" },
    ],
  },
  { id: 5, type: "divider" },
  { id: 6, type: "title", label: "راهنما" },
  { id: 7, label: "کتابخونه", link: "https://flatlogic.com/templates", icon: <LibraryIcon /> },
  { id: 8, label: "پشتیبانی", link: "https://flatlogic.com/forum", icon: <SupportIcon /> },
  { id: 9, label: "پرسش و پاسخ", link: "https://flatlogic.com/forum", icon: <FAQIcon /> },
  { id: 10, type: "divider" },
  { id: 11, type: "title", label: "پروژه ها" },
  {
    id: 12,
    label: "آخرین پروژه",
    link: "",
    icon: <Dot size="small" color="warning" />,
  },
  {
    id: 13,
    label: "ستاره دارها",
    link: "",
    icon: <Dot size="small" color="primary" />,
  },
  {
    id: 14,
    label: "پس زمینه",
    link: "",
    icon: <Dot size="small" color="secondary" />,
  },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
