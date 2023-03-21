import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Common } from "./Common";

export const DetailWrapper = styled.div`
  color: ${Common.colors.white01};

  .detail-main {
    display: flex;
    margin-top: -3.9rem;
    width: 100%;
    height: 56vw;
    background-image: linear-gradient(
        to bottom,
        rgba(50, 50, 50, 0.5),
        rgba(50, 50, 50, 1)
      ),
      url(${(props) => props.src});
    background-size: contain;
    transition: height 0.2s ease-in-out;

    @media (min-width: 768px) {
      height: 40rem;
    }
    @media (max-width: 768px) {
      height: 30rem;
    }
    @media (max-width: 500px) {
      height: 400px;
    }
  }

  .main-wrapper {
    width: 100%;
    display: flex;
    margin-top: 3.9rem;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
      padding: 0rem 4rem;
    }
    @media (max-width: 768px) {
      padding: 0rem 4rem;
    }
    @media (max-width: 500px) {
      padding: 0rem 2rem;
    }
  }

  .title-wrapper {
    position: relative;
    top: 40%;
    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      width: 70%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
  }

  .title {
    font-family: "bitbit";
    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
      font-size: 4.5vw;
      margin: 2rem 0rem;
    }
    @media (max-width: 768px) {
      font-size: 32px;
      margin: 1.5rem 0rem;
    }
    @media (max-width: 500px) {
      font-size: 24px;
      margin: 1rem 0rem;
    }
  }

  .discription {
    margin: 0;
    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 500px) {
      font-size: 10px;
    }
  }

  .scrap-wrapper {
    display: flex;
    padding-bottom: 2.5rem;
    justify-content: center;
    align-items: end;
    background-image: url(${(props) => props.scrap_src});
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
      width: 3rem;
      height: 3.5rem;
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      width: 2rem;
      height: 2.4rem;
      font-size: 12px;
    }
    @media (max-width: 500px) {
      width: 30px;
      height: 35px;
      font-size: 10px;
    }
  }

  .detail-sub {
  }

  .info-wrapper {
    display: flex;
    justify-content: space-around;
  }

  .single-info {
    border: 2px solid ${Common.colors.white01};
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Noto Serif KR", serif;

    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media (min-width: 768px) {
      width: 20vw;
      height: 20vw;
    }
    @media (max-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
    @media (max-width: 500px) {
      width: 5rem;
      height: 5rem;
    }
  }

  .info-title {
    font-weight: 700;
    transition: all 0.5s ease-in-out;
    margin-top: 0;

    @media (min-width: 768px) {
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }
    @media (max-width: 768px) {
      margin-bottom: 0.4rem;
      font-size: 14px;
    }
    @media (max-width: 500px) {
      margin: 5px;
      font-size: 12px;
    }
  }

  .info-content {
    font-weight: 400;
    transition: all 0.5s ease-in-out;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      font-size: 12px;
    }
    @media (max-width: 500px) {
      font-size: 8px;
    }
  }

  .scrennshots-wrapper {
    font-family: "Noto Sans KR", serif;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 3vw;
      padding: 3rem 4rem;
      padding-bottom: 0;
    }
    @media (max-width: 768px) {
      font-size: 3vw;
      padding: 2rem 3rem;
      padding-bottom: 0;
    }
    @media (max-width: 500px) {
      font-size: 14px;
      padding: 3rem 2rem;
      padding-bottom: 0;
    }
  }

  .screenshot-text {
    margin: 0;

    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .swiper-pagination-bullet {
    border-radius: 0.2rem;

    @media (min-width: 768px) {
      width: 2.5rem;
    }
    @media (max-width: 768px) {
      width: 1.5rem;
    }
    @media (max-width: 500px) {
      width: 1rem;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: ${Common.colors.lightGray01};
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: ${Common.colors.mainColor05};
  }

  .swiper-slide {
    margin: 2rem 0rem;
  }

  .swiper-slide img {
    width: 100%;
    border-radius: 0.5rem;
    object-fit: contain;
  }

  .gradient {
    background-image: linear-gradient(
      to bottom,
      rgba(50, 50, 50, 1),
      rgba(81, 81, 81, 1)
    );
    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
      height: 8rem;
    }
    @media (max-width: 768px) {
      height: 5rem;
    }
    @media (max-width: 500px) {
      height: 3rem;
    }
  }
`;

export const RecommendUsers = styled.div`
  background-color: #515151;
  transition: all 0.5s ease-in-out;

  .title-text {
    margin: 0;
    font-family: "Noto Sans KR", serif;
    font-weight: 700;

    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media (min-width: 768px) {
      padding: 0rem 4rem;
      font-size: 3vw;
    }
    @media (max-width: 768px) {
      padding: 0rem 3rem;
      font-size: 3vw;
    }
    @media (max-width: 500px) {
      padding: 0rem 2rem;
      font-size: 14px;
    }
  }

  .users-wrapper {
    display: flex;
    margin: 2rem 0rem;
    justify-content: space-around;
    overflow-x: scroll;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    @media (min-width: 768px) {
      padding: 0rem 4rem;
    }
    @media (max-width: 768px) {
      padding: 0rem 3rem;
    }
    @media (max-width: 500px) {
      padding: 0rem 2rem;
    }
  }

  .users-wrapper::-webkit-scrollbar {
    display: none;
  }

  .single-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
      margin: 0rem 3rem;
    }
    @media (max-width: 768px) {
      margin: 0rem 2rem;
    }
    @media (max-width: 500px) {
      margin: 0rem 0.5rem;
    }
  }

  .profile-wrapper {
    border-radius: 70%;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    @media (min-width: 768px) {
      width: 7rem;
      height: 7rem;
    }
    @media (max-width: 768px) {
      width: 5rem;
      height: 5rem;
    }
    @media (max-width: 500px) {
      width: 3rem;
      height: 3rem;
    }
  }

  .profile-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .username {
    @media (min-width: 768px) {
      font-size: 18px;
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }

  .gradient {
    background-image: linear-gradient(
      to bottom,
      rgba(81, 81, 81, 1),
      rgba(50, 50, 50, 1)
    );
    transition: all 0.5s ease-in-out;

    @media (min-width: 768px) {
      height: 8rem;
    }
    @media (max-width: 768px) {
      height: 5rem;
    }
    @media (max-width: 500px) {
      height: 3rem;
    }
  }
`;

export const ReviewWrapper = styled.div`
  @media (min-width: 768px) {
    padding: 0rem 4rem;
  }
  @media (max-width: 768px) {
    padding: 0rem 3rem;
  }
  @media (max-width: 500px) {
    padding: 0rem 2rem;
  }

  .title-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
      font-size: 3vw;
    }
    @media (max-width: 768px) {
      font-size: 3vw;
    }
    @media (max-width: 500px) {
      font-size: 14px;
    }
  }

  .title-text {
    margin: 0;
    font-family: "Noto Sans KR", serif;
    font-weight: 700;

    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .review-wrapper {
    display: flex;

    flex-wrap: wrap;
    padding-bottom: 10rem;

    @media (min-width: 1000px) {
      margin-top: 2rem;
      justify-content: space-between;
    }
    @media (max-width: 1000px) {
      margin-top: 1.5rem;
      justify-content: space-between;
    }
    @media (max-width: 620px) {
      justify-content: center;
      margin-top: 1rem;
    }
  }

  .no-review {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
      height: 25rem;
      font-size: 1rem;
    }
    @media (max-width: 768px) {
      height: 20rem;
      font-size: 0.8rem;
    }
    @media (max-width: 500px) {
      height: 15rem;
      font-size: 0.6rem;
    }
  }
`;

export const SingleReview = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease-in-out;
  min-height: 14rem;
  border: 1.5px solid ${Common.colors.white01};
  font-family: "Noto Sans KR", serif;

  @media (min-width: 1000px) {
    width: 22rem;
    margin: 1rem 0.5rem;
    border-radius: 2.5rem;
    padding: 1.8rem;
  }
  @media (max-width: 1000px) {
    width: 40%;
    margin: 1rem 0rem;
    border-radius: 2rem;
    padding: 1.5rem;
  }
  @media (max-width: 620px) {
    width: 95%;
    border-radius: 2rem;
    margin: 0.5rem 0rem;
    padding: 1.5rem;
  }

  .profile-wrapper {
    display: flex;
  }

  .profile-img-wrapper {
    border-radius: 70%;
    overflow: hidden;
    cursor: pointer;

    @media (min-width: 1000px) {
      width: 4rem;
      height: 4rem;
    }
    @media (max-width: 1000px) {
      width: 3.5rem;
      height: 3.5rem;
    }
    @media (max-width: 620px) {
      width: 3rem;
      height: 3rem;
    }
  }

  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .star-wrapper {
    display: flex;
  }

  .profile-content-wrapper {
    margin: 0rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .user-name {
    margin: 0;
    font-weight: 700;

    @media (min-width: 620px) {
      font-size: 1rem;
    }
    @media (max-width: 620px) {
      font-size: 0.8rem;
    }
  }

  .review-title {
    font-weight: 700;

    @media (min-width: 620px) {
      font-size: 1rem;
      margin: 0.5rem 0rem;
    }
    @media (max-width: 620px) {
      font-size: 0.8rem;
      margin: 0.5rem 0rem;
    }
  }

  .review-content {
    margin: 0;

    @media (min-width: 620px) {
      line-height: 1.3rem;
      font-size: 0.8rem;
    }
    @media (max-width: 620px) {
      line-height: 1rem;
      font-size: 0.6rem;
    }
  }
`;

export const FaStar = styled.div`
  color: ${(props) =>
    props.active === "true" ? Common.colors.starColor01 : "#515151"};

  @media (min-width: 620px) {
    font-size: 0.8rem;
  }
  @media (max-width: 620px) {
    font-size: 0.6rem;
  }
`;

export const ChatBtn = styled(motion.div)`
  position: fixed;
  z-index: 99;
  background-color: ${Common.colors.mainColor04};
  border-radius: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Common.colors.white01};
  cursor: pointer;

  @media (min-width: 768px) {
    border: 2px solid ${Common.colors.white01};
    width: 5rem;
    height: 5rem;
    bottom: 3rem;
    right: 3rem;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    border: 2px solid ${Common.colors.white01};
    width: 4.5rem;
    height: 4.5rem;
    bottom: 2.5rem;
    right: 2.5rem;
    font-size: 1.8rem;
  }
  @media (max-width: 500px) {
    border: 1.5px solid ${Common.colors.white01};
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    font-size: 1.5rem;
  }
`;
