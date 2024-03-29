import React from "react";

import Information from "@/screens/onboarding/corporation/Information";
import { useGetApplicationId } from "@/utils/Helpers";

export default function CorporationInformationPage() {
  useGetApplicationId();
  return <Information />;
}
