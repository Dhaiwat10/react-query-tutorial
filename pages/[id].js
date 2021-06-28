import { Container } from 'react-bootstrap';
import { usePost } from '../hooks/hooks';
import Link from 'next/link'

export default function Post({ id }) {
  const { data: post, error, isLoading } = usePost(id);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error occured</div>;
  }

  return (
    <Container>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href='/'>
        <a>⬅ Go back</a>
      </Link>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}
