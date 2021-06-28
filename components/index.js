import { Card } from 'react-bootstrap';
import Link from 'next/link';

export const PostPreview = ({ post }) => {
  return (
    <Card style={{ width: 'fit-content' }}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body.slice(0, 30)}...</Card.Text>
        <Link href={`/${post.id}`}>
          <a>Read more</a>
        </Link>
      </Card.Body>
    </Card>
  );
};
