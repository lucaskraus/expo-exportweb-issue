import React from "react";

import Employment from "@/screens/onboarding/individual/Employment";
import { useGetApplicationId } from "@/utils/Helpers";

export default function EmploymentPage() {
  useGetApplicationId();
  return <Employment />;
}
