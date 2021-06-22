import React, { useState, useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";



const EditBook = (props) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    setBook(props.location.state);
  }, []);

  const setBookProperty = (key, e) => {
    // eslint-disable-next-line default-case
    switch (key) {
      case "name":
        setBook({ ...book, name: e.target.value });
        break;
      case "price":
        setBook({ ...book, price: e.target.value });
        break;
      case "publisher":
        setBook({ ...book, publisher: e.target.value });
        break;
      case "author":
        setBook({ ...book, author: e.target.value });
        break;
    }
  };

  

  const goBacktoBookList = () => {
    props.history.push("/app/booklist");
    toast.info('🦄 Editing completed successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (
    <div>
      <PageTitle title="ویرایش کتاب" />
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            variant="outlined"
            placeholder={"نام کتاب"}
            value={book.name}
            onChange={(e) => {
              setBookProperty("name", e);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            placeholder={"قیمت"}
            value={book.price}
            type="number"
            onChange={(e) => {
              setBookProperty("price", e);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            placeholder={"انتشارات"}
            value={book.publisher}
            onChange={(e) => {
              setBookProperty("publisher", e);
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            placeholder={"نویسنده"}
            value={book.author}
            onChange={(e) => {
              setBookProperty("author", e);
            }}
          />
        </Grid>
        <Grid item spacing={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={goBacktoBookList}
          >
            ذخیره
          </Button>
          <Button variant="contained" onClick={goBacktoBookList}>
            لغو
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditBook;
