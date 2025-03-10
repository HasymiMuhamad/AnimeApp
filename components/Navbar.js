'use client';

import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Menu } from 'lucide-react';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.isScrolled ? '#141414' : 'transparent'};
  transition: background-color 0.3s ease;
  z-index: 1000;
`;

const Logo = styled.div`
  color: #FFFFFF;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  color: white;
  cursor: pointer;
`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav isScrolled={isScrolled}>
      <Logo onClick={() => router.push('/')}>AnimeApp</Logo>
      <NavItems>
        <SearchBar>
          <Search size={24} />
        </SearchBar>
        <Menu size={24} color="white" />
      </NavItems>
    </Nav>
  );
}