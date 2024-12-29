import axios from "axios";
import Styles from '../Pages/Trending/Trending.module.css'
//import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../components/SingleContent/SingleContent";
import CustomPagination from "../components/Pagination/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  // const fetchTrending = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  //   );

  //   setContent(data.results);
  // };

  // curl --request GET \
  // --url 'https://api.themoviedb.org/3/trending/all/day?language=en-US' \
  // --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM' \
  // --header 'accept: application/json'

const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`;
const options={
  method:'GET',
  headers:{
    Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzI0YmZiMDY4ZGM1NzYxNzNjOTJkNzZmODMwZjY5ZCIsIm5iZiI6MTczNTM3MTEwMi42NDMwMDAxLCJzdWIiOiI2NzZmYTk1ZWY5YmMwMmU0OTg5MmJjNjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.P-3TRspZ0IR32QjkAqQMLNZLxeeTSZc0soB3rSuG9rM',
    accept: 'application/json'
  }
}



  const fetchTrending = async () => {
    const { data } = await axios.get(url,options);
 console.log(data,'trending')
    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className={Styles.pageTitle}>Trending Today</span>
      <div className={Styles.trending}>
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              Styles={Styles}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
