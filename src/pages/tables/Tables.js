import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["sina ghaffari", "Ketabico.", "تهران", "1"],
  ["amin ghaffari", "Ketabico.", "تبریز", "1"],
  ["ali danhel", "Ketabico.", "تبریز", "3"],
  ["hamed chokhachi", "Ketabico.", "کرج", "1"],
  ["ali moasef", "Ketabico.", "تبریز", "5"],
  ["nima salim", "Ketabico.", "کرج", "1"],
  ["esmaiel safari", "Ketabico.", "کرج", "7"],
  ["behnam mostafaeian", "Ketabico.", "تهران", "1"],
  ["behzad ghahvachi", "Ketabico.", "تبریز", "12"],
  ["mostafa norozi", "Ketabico.", "کرج", "1"],
  ["hamed yeganeh", "Ketabico.", "تبریز", "7"],
  ["saeed chokhachi", "Ketabico.", "تبریز", "3"],
];

const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="جداول" />
     <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            ti tle="Employee List"
            data={datatableData}
            columns={["نام", "شرکت", "شهر", "منطقه"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="جدول Material - UI" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
