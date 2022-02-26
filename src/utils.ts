import { Tier } from "./types";

export const calculateTier = (rating: number): Tier => {
  if (rating >= 4.8) {
    return "gold";
  } else if (rating >= 4.5) {
    return "silver";
  }
  return "bronze";
};
