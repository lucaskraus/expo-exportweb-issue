import React from "react";

import Rejected from "@/screens/onboarding/Rejected";
import { useGetApplicationId } from "@/utils/Helpers";

export default function RejectedPage() {
  useGetApplicationId();
  return <Rejected />;
}
