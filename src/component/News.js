import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
import NewsArticle from "./NewsArticle";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">Haloo 👋 let's check it out the article! </h1>
      <div>
      <Container>
  <Row>
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
          </Row>
          </Container>
      </div>
    </div>
  );
}

export default News;