import React from "react";
import styled, { keyframes } from "styled-components";

const SkeletonAnimate = keyframes`
    from {
      left:-300px;
    }
    to {
      left:100%;
    }
`;
const StyleSkeleton = styled("div")`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  margin-bottom: 10px;
  overflow: hidden;
  background: #e1e1e1;
  border-radius: 4px;
  ::before {
    content: "";
    display: block;
    position: relative;
    left: -300px;
    width: 200px;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    );
    animation: ${SkeletonAnimate} 1s ease-in-out infinite;
  }
  @media (max-width: 900px) {
    width: auto;
  }
`;

const Skeleton = ({ width, height, amount }) => {
  return amount ? (
    [...Array(amount)].map((skeleton, index) => {
      return (
        <StyleSkeleton
          key={index}
          width={width}
          height={height}
          amount={index}
        />
      );
    })
  ) : (
    <StyleSkeleton width={width} height={height} />
  );
};
export default Skeleton;
