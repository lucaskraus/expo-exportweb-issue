import React from "react";

import Name from "@/screens/onboarding/individual/Name";
import { useGetApplicationId } from "@/utils/Helpers";

export default function Step1Page() {
  useGetApplicationId();
  return <Name />;
}
