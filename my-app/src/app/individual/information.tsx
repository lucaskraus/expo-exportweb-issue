import React from "react";

import Information from "@/screens/onboarding/individual/Information";
import { useGetApplicationId } from "@/utils/Helpers";

export default function Step2Page() {
  useGetApplicationId();
  return <Information />;
}
