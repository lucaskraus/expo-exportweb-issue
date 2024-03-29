import React from "react";

import Localization from "@/screens/onboarding/corporation/Localization";
import { useGetApplicationId } from "@/utils/Helpers";

export default function CorporationLocalizationPage() {
  useGetApplicationId();
  return <Localization />;
}
