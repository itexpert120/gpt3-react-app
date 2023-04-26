import { PropTypes } from "prop-types";
import "./article.css";

function Article({ imgUrl, date, title }) {
  return (
    <>
      <div className="gpt3__blog-container_article">
        <img
          className="gpt3__blog-container_article-image"
          src={imgUrl}
          alt=""
        />
        <div className="gpt3__blog-container_article-content">
          <p>{date}</p>
          <h3>{title}</h3>
          <p>Read Full Article</p>
        </div>
      </div>
    </>
  );
}

Article.propTypes = {
  imgUrl: PropTypes.any.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
