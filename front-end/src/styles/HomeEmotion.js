import styled from "@emotion/styled";
import { Common } from "./Common";
import banner_bg from "../assets/banner_bg.gif";

export const HomeWrapper = styled.div`
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
  }
  .swiper-pagination-bullet-active {
    background-color: white;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #ffffff;
  }
`;

export const Banner = styled.div`
  height: 15rem;
  color: ${Common.colors.lightGray01};
  background: linear-gradient(
    to bottom,
    ${Common.colors.mainColor02},
    ${Common.colors.lavender01}
  );

  .banner1 {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .banner2 {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    background-image: url(${banner_bg});
    background-size: 150px;
    background-repeat: repeat-x;
  }

  .lottie-wrapper {
    display: flex;
    margin-left: 8rem;
    width: 13rem;
  }

  .single-lottie {
    position: relative;
    margin-left: -5rem;
  }

  .text-wrapper {
    z-index: 2;
    margin-right: 3rem;
  }

  .subtitle {
    margin: 0;
    color: #ffffff;
    font-family: "Noto Serif KR", serif;
    font-size: 1.2rem;
    font-weight: 300;
  }

  .title {
    margin: 0;
    color: #ffffff;
    font-family: "Noto Sans KR", serif;
    font-size: 2.8rem;
    font-weight: 700;
    text-shadow: #000 1px 0 4px;
  }

  .test-btn {
    margin-top: 0.8rem;
    width: 9rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid #ffffff;
    border-radius: 2rem;
    font-size: 1rem;
    font-family: "Noto Sans KR", serif;
  }

  .test-btn:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transition: background 0.3s ease-in-out;
    font-weight: 600;
    font-size: 1.05rem;
    transition: font-size 0.3s ease-in-out;
  }
`;

export const RecommendWrapper = styled.div`
  padding: 1rem 1.5rem;

  .rcm-title {
    color: #ffffff;
    font-family: "Noto Sans KR", serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem 0rem;
  }
`;
