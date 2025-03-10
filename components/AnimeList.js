'use client';

import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';

const Container = styled.div`
  padding: 24px;
  color: white;
`;

const Table = styled.div`
  background: #1f1f1f;
  border-radius: 8px;
  overflow: hidden;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 16px;
  padding: 16px;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2a2a2a;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #333;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

const Info = styled.div`
  h3 {
    margin: 0 0 8px;
  }

  .japanese {
    color: #999;
    font-size: 0.9rem;
  }
`;

const Rating = styled.div`
  background-color: #333;
  padding: 4px 8px;
  border-radius: 4px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? '#E50914' : '#333'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.active ? '#C11119' : '#444'};
  }
`;

export default function AnimeList({ animeData, page, setPage }) {
  const router = useRouter();

  return (
    <Container>
      <h2>Anime List</h2>
      <Table>
        {animeData.data.map((anime) => (
          <Row
            key={anime.id}
            onClick={() => router.push(`/anime/${anime.id}`)}
          >
            <Image
              src={anime.attributes.posterImage.medium}
              alt={anime.attributes.canonicalTitle}
            />
            <Info>
              <h3>{anime.attributes.canonicalTitle}</h3>
              <div className="japanese">{anime.attributes.titles.ja_jp}</div>
            </Info>
            <Rating>{anime.attributes.averageRating}</Rating>
            <div>{anime.attributes.subtype}</div>
          </Row>
        ))}
      </Table>
      <Pagination>
        <PageButton
          onClick={() => setPage(p => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          Previous
        </PageButton>
        <PageButton
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </PageButton>
      </Pagination>
    </Container>
  );
}