'use client';

import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #141414;
  color: #757575;
  padding: 48px 24px;
  margin-top: 48px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #fff;
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Legal</h3>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Preferences</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Social</h3>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
}