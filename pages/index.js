import { PostPreview } from '../components';
import { usePosts } from '../hooks/hooks';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

export default function Home() {
  const { data, loading, error } = usePosts();

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error occured</div>;
  }

  return (
    <Container>
      {data.map((post) => {
        return (
          <Row key={post.id} style={{ margin: '20px' }}>
            <PostPreview post={post} />
          </Row>
        );
      })}
    </Container>
  );
}
