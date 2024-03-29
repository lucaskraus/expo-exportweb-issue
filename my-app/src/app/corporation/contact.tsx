import React from "react";

import Contact from "@/screens/onboarding/corporation/Contact";
import { useGetApplicationId } from "@/utils/Helpers";

export default function CorporationInformationPage() {
  useGetApplicationId();
  return <Contact />;
}
