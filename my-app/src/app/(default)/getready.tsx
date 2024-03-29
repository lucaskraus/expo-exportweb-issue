import React from "react";

import GetReady from "@/screens/onboarding/GetReady";
import { useGetApplicationId } from "@/utils/Helpers";

export default function GetReadyPage() {
  useGetApplicationId();
  return <GetReady />;
}
