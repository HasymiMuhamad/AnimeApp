'use client';

import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';

const DetailContainer = styled.div`
  min-height: 100vh;
  color: white;
  padding: 80px 24px 24px;
  background-color: #141414;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  margin-bottom: 24px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const AnimeDetail = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AnimeImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AnimeInfo = styled.div`
  h1 {
    margin: 0 0 16px;
    font-size: 2.5rem;
  }

  .japanese-title {
    color: #999;
    font-size: 1.2rem;
    margin-bottom: 24px;
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .synopsis {
    line-height: 1.6;
    color: #ccc;
  }
`;

const fetchAnimeDetail = async (id) => {
  const response = await axios.get(`https://kitsu.io/api/edge/anime/${id}`);
  return response.data;
};

const AnimePage = () => {
  const params = useParams();
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['anime', params.id],
    queryFn: () => fetchAnimeDetail(params.animeId),
  });

  if (isLoading) return <div>Loading...</div>;

  const anime = data?.data?.attributes;

  return (
    <DetailContainer>
      <BackButton onClick={() => router.back()}>
        <ArrowLeft size={20} />
        Back to List
      </BackButton>
      <AnimeDetail>
        <AnimeImage
          src={anime.posterImage.large}
          alt={anime.canonicalTitle}
        />
        <AnimeInfo>
          <h1>{anime.canonicalTitle}</h1>
          <div className="japanese-title">{anime.titles.ja_jp}</div>
          <div className="rating">
            Rating: {anime.averageRating}
          </div>
          <div className="synopsis">{anime.synopsis}</div>
        </AnimeInfo>
      </AnimeDetail>
    </DetailContainer>
  );
};


export default AnimePage;