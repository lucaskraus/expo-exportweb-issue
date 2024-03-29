import React from "react";

import Description from "@/screens/onboarding/corporation/Description";
import { useGetApplicationId } from "@/utils/Helpers";

export default function CorporationDescriptionPage() {
  useGetApplicationId();
  return <Description />;
}
