import styled from "@emotion/styled";

export const SectionIntro = styled.div`
  display: flex;
  margin-bottom: 0px;
`;

export const IntroTitle = styled.div`
  width: 60%;
`;

export const IntroTitleName = styled.div`
  font-size: 45px;
`;

export const IntroTitleDesc = styled.div`
  font-size: 14px;
  color: orangered;
`;

export const IntroLinks = styled.div`
  width: 40%;
`;

export const IntroLink = styled.div`
  text-align: right;
  font-size: 13px;
  margin-top: 2px;

  a:hover {
    color: red;
    text-decoration: underline;
  }
`;

export const Section = styled.section`
  margin-top: 30px;
`;

export const SectionInner = styled.section``;

export const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;

  &:first-letter {
    font-size: 22px;
  }
`;

export const SectionTitleLine = styled.div`
  width: 300px;
  height: 3px;
  background-color: orangered;
  margin-top: 3px;
  margin-bottom: 10px;
`;

export const Section2Col = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`;

export const Section2ColLogo = styled.div`
  img {
    width: 69px;
    height: 69px;
  }
`;

export const Section2ColDesc = styled.div``;
export const Section2ColDescTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const Section2ColDescDesc = styled.div``;

export const Section2ColDescDescInner = styled.div`
  font-size: 15px;
`;

export const Section2ColDescDescInnerStory = styled.div`
  margin-top: 8px;
  font-size: 15px;
  line-height: 130%;

  ul {
    padding-left: 20px;
  }
`;

export const Section2ColDescDescInnerTech = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

export const SkillsWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SectionProjectTitle = styled.div`
  font-style: italic;
  font-size: 18px;
`;

export const SectionProjectTech = styled.div`
  font-size: 12px;
`;

export const SectionProjectDesc = styled.div`
  font-size: 15px;
`;

export const HRLine = styled.div`
  margin: 15px 0 15px;
  width: 100%;
  height: 2px;
  background-color: lightgray;
`;
