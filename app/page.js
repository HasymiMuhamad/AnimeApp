'use client';

import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
import VideoBanner from '@/components/VideoBanner';
import AnimeList from '@/components/AnimeList';
import HorizontalScroll from '@/components/HorizontalScroll';
import CollectionSection from '@/components/CollectionSection';

const MainContainer = styled.main`
  min-height: 100vh;
  color: white;
  background-color: #141414;
`;

const fetchAnime = async (page = 0) => {
  const response = await axios.get(
    `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${page * 10}`
  );
  return response.data;
};

export default function Home() {
  const [page, setPage] = useState(0);
  const { data, isLoading } = useQuery({
    queryKey: ['anime', page],
    queryFn: () => fetchAnime(page),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <MainContainer>
      <VideoBanner />
      <HorizontalScroll />
      <CollectionSection />
      <AnimeList
        animeData={data}
        page={page}
        setPage={setPage}
        total={data?.meta?.count}
      />
    </MainContainer>
  );
}