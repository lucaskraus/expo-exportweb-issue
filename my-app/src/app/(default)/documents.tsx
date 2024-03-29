import React from "react";

import Documents from "@/screens/onboarding/Documents";
import { useGetApplicationId } from "@/utils/Helpers";

export default function DocumentsPage() {
  useGetApplicationId();
  return <Documents />;
}
