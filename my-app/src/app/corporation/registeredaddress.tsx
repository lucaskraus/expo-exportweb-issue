import React from "react";

import RegisteredAddress from "@/screens/onboarding/corporation/RegisteredAddress";
import { useGetApplicationId } from "@/utils/Helpers";

export default function CorporationRegisteredAddressPage() {
  useGetApplicationId();
  return <RegisteredAddress />;
}
