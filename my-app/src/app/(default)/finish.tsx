import React from "react";

import Finish from "@/screens/onboarding/Finish";
import { useGetApplicationId } from "@/utils/Helpers";

export default function FinishPage() {
  useGetApplicationId();
  return <Finish />;
}
