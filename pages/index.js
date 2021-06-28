import { PostPreview } from '../components';
import { usePosts } from '../hooks/hooks';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

export default function Home() {
  const { data, error, isLoading } = usePosts();

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error occured</div>;
  }

  return (
    <Container>
      {data.map((post) => {
        return (
          <Row key={post.id} style={{ margin: '20px auto' }}>
            <PostPreview post={post} />
          </Row>
        );
      })}
    </Container>
  );
}
