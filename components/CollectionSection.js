'use client';

import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { BASE_API_ANIME_FILTERED } from '@/app/constant';

const Container = styled.div`
  padding: 24px;
  color: white;
`;

const FilterSection = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const Select = styled.select`
  background-color: #333;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;

const AnimeCard = styled.div`
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
    margin-bottom: 8px;
  }

  h3 {
    font-size: 1rem;
    margin: 8px 0;
  }

  .info {
    font-size: 0.9rem;
    color: #999;
  }
`;

const fetchFilteredAnime = async (category, sort) => {
  const response = await axios.get(BASE_API_ANIME_FILTERED(category, sort));
  return response.data;
};

export default function CollectionSection() {
  const [category, setCategory] = useState('action');
  const [sort, setSort] = useState('-averageRating');
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ['filtered-anime', category, sort],
    queryFn: () => fetchFilteredAnime(category, sort),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <h2>Anime Collection</h2>
      <FilterSection>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
        </Select>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="-averageRating">Rating (High to Low)</option>
          <option value="averageRating">Rating (Low to High)</option>
          <option value="-startDate">Newest First</option>
          <option value="startDate">Oldest First</option>
        </Select>
      </FilterSection>
      <Grid>
        {data.data.map((anime) => (
          <AnimeCard
            key={anime.id}
            onClick={() => router.push(`/anime/${anime.id}`)}
          >
            <img
              src={anime.attributes.posterImage.medium}
              alt={anime.attributes.canonicalTitle}
            />
            <h3>{anime.attributes.canonicalTitle}</h3>
            <div className="info">
              Rating: {anime.attributes.averageRating}
            </div>
          </AnimeCard>
        ))}
      </Grid>
    </Container>
  );
}