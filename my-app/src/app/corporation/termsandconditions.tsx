import React from "react";

import Terms from "@/screens/onboarding/corporation/Terms";
import { useGetApplicationId } from "@/utils/Helpers";

export default function TermsAndConditionsPage() {
  useGetApplicationId();
  return <Terms />;
}
