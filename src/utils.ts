import { Tier } from "./types";

export const TIER_COLORS: { [key in Tier]: string } = {
  gold: "goldenrod",
  silver: "silver",
  bronze: "peru",
};

export const calculateTier = (rating: number): Tier => {
  if (rating >= 4.8) {
    return "gold";
  } else if (rating >= 4.5) {
    return "silver";
  }
  return "bronze";
};
