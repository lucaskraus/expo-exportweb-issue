import React from "react";

import Approved from "@/screens/onboarding/Approved";
import { useGetApplicationId } from "@/utils/Helpers";

export default function ApprovedPage() {
  useGetApplicationId();
  return <Approved />;
}
