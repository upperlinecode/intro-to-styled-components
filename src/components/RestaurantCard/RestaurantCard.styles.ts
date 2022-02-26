import styled from "styled-components";
import { Tier } from "../../types";

export const RestaurantCardRoot = styled.div<{ tier: Tier }>`
  background-color: ${({ tier }) => {
    switch (tier) {
      case "gold":
        return "#E6B605";
      case "silver":
        return "DimGrey";
      case "bronze":
        return "Chocolate";
    }
  }};
  display: grid;
  grid-template-columns: max(200px, 20%) auto;
  color: white;

  a {
    color: white;
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;

  img {
    min-height: 100%;
    min-width: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  * {
    margin: 10px;
  }
`;

export const CardDescription = styled.p``;
