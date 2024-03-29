import React from "react";

import Review from "@/screens/onboarding/Review";
import { useGetApplicationId } from "@/utils/Helpers";

export default function ReviewPage() {
  useGetApplicationId();
  return <Review />;
}
