import React from "react";
import { Grid } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function TypographyPage() {
  var classes = useStyles();

  return (
    <>
      <PageTitle title="تایپوگرافی" />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Widget title="عناوین" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" className={classes.text}>
                h1. عناوین
              </Typography>
              <Typography variant="h2" className={classes.text}>
                h2. عناوین
              </Typography>
              <Typography variant="h3" className={classes.text}>
                h3. عناوین
              </Typography>
              <Typography variant="h4" className={classes.text}>
                h4. عناوین
              </Typography>
              <Typography variant="h5" className={classes.text}>
                h5. عناوین
              </Typography>
              <Typography variant="h6">h6. عناوین</Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="رنگ متن ها" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" color="primary" className={classes.text}>
                h1. عناوین
              </Typography>
              <Typography variant="h2" color="success" className={classes.text}>
                h2. عناوین
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.text}
              >
                h3. عناوین
              </Typography>
              <Typography variant="h4" color="warning" className={classes.text}>
                h4. عناوین
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                colorBrightness="light"
                className={classes.text}
              >
                h5. عناوین
              </Typography>
              <Typography variant="h6" color="info">
                h6. عناوین
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="تنظیمات اصلی متن" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text}>متن اصلی</Typography>
              <Typography className={classes.text} weight="light">
               متن سبک اصلی
              </Typography>
              <Typography className={classes.text} weight="medium">
                متن متوسط اصلی
              </Typography>
              <Typography className={classes.text} weight="bold">
                متن بولد اصلی
              </Typography>
              <Typography className={classes.text}>
                متن اصلی با حروف بزرگ
              </Typography>
              <Typography className={classes.text}>
                متن اصلی با حروف کوچک
              </Typography>
              <Typography className={classes.text}>
                متن با حروف اولیه بزرگ
              </Typography>
              <Typography>
                <i>متن خطی مقدماتی</i>
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="اندازه متن" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text} size="sm">
                عنوان تایپوگرافی اندازه متن ( SM )
              </Typography>
              <Typography className={classes.text}>
              عنوان تایپوگرافی اندازه متن ( Regular )
              </Typography>
              <Typography className={classes.text} size="md">
              عنوان تایپوگرافی اندازه متن ( MD )
              </Typography>
              <Typography className={classes.text} size="xl">
              عنوان تایپوگرافی اندازه متن ( XL )
              </Typography>
              <Typography className={classes.text} size="xxl">
              عنوان تایپوگرافی اندازه متن ( XXL )
              </Typography>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
