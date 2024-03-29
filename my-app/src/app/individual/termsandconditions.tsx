import React from "react";

import Terms from "@/screens/onboarding/individual/Terms";
import { useGetApplicationId } from "@/utils/Helpers";

export default function TermsAndConditionsPage() {
  useGetApplicationId();
  return <Terms />;
}
