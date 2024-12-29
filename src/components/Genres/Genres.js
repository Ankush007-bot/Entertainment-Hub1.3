// import { Chip } from "@material-ui/core";
import { Chip } from '@mui/material';
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };




  // const fetchGenres = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  //   );
  //   setGenres(data.genres);
  // };


  const url = `https://api.themoviedb.org/3/genre/${type}/list?&language=en-US`

  const options = {
      method: 'GET',
      headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM',
          accept: 'application/json',
      },
  };

   const fetchGenres = async () => {
    const { data } = await axios.get(
      url, options
    );
    console.log(data,'data ji')
    setGenres(data.genres);
  };





  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.length>0&&genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
