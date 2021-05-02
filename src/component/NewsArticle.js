import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


function NewsArticle({ data }) {
  return (
    <Col style={{marginBottom:20}}
    xs={12} md={4}>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{data.title}</Card.Title>
    <Card.Text>
      {data.description}
    </Card.Text>
    <small className='text-muted'>
      {data.author}
    </small>
    <br></br>
    <small className='text-muted'>
      {data.publishedAt}
    </small>
    <br></br>
    <small className='text-muted'>
      {data.source.name}
    </small>
  </Card.Body>
</Card>
</Col>
  );
}

export default NewsArticle;