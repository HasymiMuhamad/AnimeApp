'use client';

import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { BASE_API_ANIME_TRENDING } from '@/app/constant';
import axios from 'axios';

const ScrollContainer = styled.div`
  padding: 24px;
  margin-bottom: 48px;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 16px;
`;

const ScrollContent = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
  scrollbar-width: thin;
  scrollbar-color: #666 #141414;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #141414;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 3px;
  }
`;

const AnimeCard = styled.div`
  flex: 0 0 200px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const fetchTrendingAnime = async () => {
  const response = await axios.get(BASE_API_ANIME_TRENDING());
  return response.data;
};

export default function HorizontalScroll() {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ['trending-anime'],
    queryFn: fetchTrendingAnime,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <ScrollContainer>
      <Title>Trending Now</Title>
      <ScrollContent>
        {data.data.map((anime) => (
          <AnimeCard
            key={anime.id}
            onClick={() => router.push(`/anime/${anime.id}`)}
          >
            <img
              src={anime.attributes.posterImage.medium}
              alt={anime.attributes.canonicalTitle}
            />
          </AnimeCard>
        ))}
      </ScrollContent>
    </ScrollContainer>
  );
}