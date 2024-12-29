import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
//import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import Styles from './SingleContent.module.css'

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,

}) => {
  return (
    // <ContentModal media_type={media_type} id={id}>
    //   <Badge
    //     badgeContent={vote_average}
    //     color={vote_average > 6 ? "primary" : "secondary"}
    //   />
    //   <img
    //     className="poster"
    //     src={poster ? `${img_300}${poster}` : unavailable}
    //     alt={title}
    //   />
    //   <b className="title">{title}</b>
    //   <span className="subTitle">
    //     {media_type === "tv" ? "TV Series" : "Movie"}
    //     <span className="subTitle">{date}</span>
    //   </span>
    // </ContentModal>

 <ContentModal media_type={media_type} id={id}>
<div className={Styles.media}>
   <Badge
       badgeContent={vote_average}
         color={vote_average > 6 ? "primary" : "secondary"}
       />
    <img
    className={Styles.poster}
    src={poster ? `${img_300}${poster}` : unavailable}
    alt={title}
  />
  <b className={Styles.title}>{title}</b>
  <span className={Styles.subTitle}>
    {media_type === "tv" ? "TV Series" : "Movie"}
    <span className={Styles.subTitle}>{date}</span>
  </span>
  </div>
   </ContentModal>
  );
};

export default SingleContent;
