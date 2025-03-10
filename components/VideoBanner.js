'use client';

import styled from '@emotion/styled';
import { Play, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { BASE_URL_VIDEO_BANNER } from '@/app/constant';

const BannerContainer = styled.div`
  position: relative;
  height: 80vh;
  color: white;
  margin-bottom: 48px;
`;

const BannerVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BannerContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 48px;
  background: linear-gradient(to top, rgba(20, 20, 20, 1), transparent);
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 16px;
`;

const Description = styled.p`
  max-width: 600px;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;

  ${props => props.primary ? `
    background-color: white;
    color: black;
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  ` : `
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
    &:hover {
      background-color: rgba(109, 109, 110, 0.5);
    }
  `}
`;


export default function VideoBanner() {
  const router = useRouter();

  return (
    <BannerContainer>
      <BannerVideo autoPlay muted loop>
        <source src={BASE_URL_VIDEO_BANNER()} type="video/mp4" />
      </BannerVideo>
      <BannerContent>
        <Title>Hunter x Hunter (2011)</Title>
        <Description>
          In the year 2022, thousands of gamers become trapped in a new virtual reality online role-playing game. Their struggle for survival becomes a fight for humanity's future.
        </Description>
        <ButtonGroup>
          <Button primary onClick={() => router.push('/anime/6448')}>
            <Play size={20} /> Watch Now
          </Button>
          <Button onClick={() => router.push('/anime/6448')}>
            <Info size={20} /> More Info
          </Button>
        </ButtonGroup>
      </BannerContent>
    </BannerContainer>
  );
}