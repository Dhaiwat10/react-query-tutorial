import { PostPreview } from '../components';
import { usePosts } from '../hooks/hooks';
import { Container, Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useQueryClient } from 'react-query';

export default function Home() {
  const queryClient = useQueryClient();

  const { data, error, isLoading } = usePosts();

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error occured</div>;
  }

  const reFetchPosts = () => {
    queryClient.invalidateQueries('posts');
  };

  return (
    <Container>
      <Button onClick={reFetchPosts}>Re-fetch</Button>
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
