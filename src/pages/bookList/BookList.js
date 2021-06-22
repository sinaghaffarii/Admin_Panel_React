import React, { useState, useEffect } from "react";
import { Grid, IconButton } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import { Delete, Edit } from "@material-ui/icons";

// components
import PageTitle from "../../components/PageTitle";

const bookListDate = [
  {
    id: "1",
    name: "ریاضی دوازدهم",
    price: "120,000",
    publisher: "خیلی سبز",
    author: "محمد حسین پور",
  },
  {
    id: "2",
    name: "زیست پایه ",
    price: "98,000",
    publisher: "کاکو",
    author: "سینا غفاری",
  },
  {
    id: "3",
    name: "شیمی یازدهم ",
    price: "45,000",
    publisher: "کاگو",
    author: "امین غفاری",
  },
  {
    id: "4",
    name: "ریاضی جامع کنور ",
    price: "27,000",
    publisher: "آی کیو پلاس",
    author: "مهدی مصطفوی",
  },
  {
    id: "5",
    name: "زبان انگلیسی پایه",
    price: "99,000",
    publisher: "خیلی سبز",
    author: "رضا حسن نژاد",
  },
  {
    id: "6",
    name: "فارسی نهم",
    price: "99,000",
    publisher: "مبتکران",
    author: "سینا غفاری",
  },
  {
    id: "7",
    name: "شیمی یازدهم ",
    price: "45,000",
    publisher: "کاگو",
    author: "امین غفاری",
  },
  {
    id: "8",
    name: "ریاضی جامع کنور ",
    price: "27,000",
    publisher: "آی کیو پلاس",
    author: "مهدی مصطفوی",
  },
  {
    id: "9",
    name: "زبان انگلیسی پایه",
    price: "99,000",
    publisher: "خیلی سبز",
    author: "رضا حسن نژاد",
  },
  {
    id: "10",
    name: "فارسی نهم",
    price: "99,000",
    publisher: "مبتکران",
    author: "سینا غفاری",
  },
];

const BookList = (props) => {
  const onEditHandler = (item) => {
    props.history.push({
      pathname: "/app/editbook",
      state: item,
    });
  };

  const onDeleteHandler = (item) => {
    let foundIndex = -1;
    books.forEach((itembook, index) => {
      if (itembook.id === item.id) foundIndex = index;
    });
    setBooks((books) => {
      return [...books.slice(0, foundIndex), ...books.slice(foundIndex + 1)];
    });
  };

  const transform = (data) => {
    return data.map((item) => {
      return [
        item.name,
        item.price,
        item.publisher,
        item.author,
        <IconButton onClick={() => onDeleteHandler(item)}>
          <Delete />
        </IconButton>,
        <IconButton onClick={() => onEditHandler(item)}>
          <Edit />
        </IconButton>,
      ];
    });
  };

  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(bookListDate);
  }, []);

  return (
    <>
      <PageTitle title="لیست کتاب ها" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={transform(books)}
            columns={[
              "نام کتاب",
              "قیمت",
              "انتشارات",
              "نویسنده",
              "حذف",
              "ویرایش",
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BookList;
