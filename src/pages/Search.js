// import {
//     Button,

//     Tab,
//     Tabs,
//     TextField,

//   } from "@material-ui/core";
  import { createTheme, ThemeProvider,} from "@mui/material/styles";
  import TextField from '@mui/material/TextField';
  import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
  import Styles from "../Pages/Search/Search.module.css";
  import SearchIcon from "@mui/icons-material/Search";
  import { useEffect, useState } from "react";
  import axios from "axios";
  import CustomPagination from "../components/Pagination/CustomPagination";
  import SingleContent from "../components/SingleContent/SingleContent";

  const Search = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const darkTheme = createTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#fff",
        },
      },
    });


    const url = `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?&language=en-US&query=${searchText}&page=${page}&include_adult=false`;

    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM',
            accept: 'application/json',
        },
    };

    const fetchSearch = async () => {
      try {
        const { data } = await axios.get(url,options);
        setContent(data.results);
        setNumOfPages(data.total_pages);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      window.scroll(0, 0);
      fetchSearch();
      // eslint-disable-next-line
    }, [type, page]);

    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <div className={Styles.search}>
            <TextField
              style={{ flex: 1 }}
              className="searchBox"
              label="Search"
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginLeft: 10 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </div>
          <Tabs
            value={type}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5 }}
            aria-label="disabled tabs example"
          >
            <Tab style={{ width: "50%" }} label="Search Movies" />
            <Tab style={{ width: "50%" }} label="Search TV Series" />
          </Tabs>
        </ThemeProvider>
        <div className= {Styles.trending}>
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={c.vote_average}
              />
            ))}
          {searchText &&
            !content &&
            (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
        </div>
        {numOfPages > 1 && (
          <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        )}
      </div>
    );
  };

  export default Search;
