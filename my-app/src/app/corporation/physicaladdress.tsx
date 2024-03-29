import React from "react";

import PhysicalAddress from "@/screens/onboarding/corporation/PhysicalAddress";
import { useGetApplicationId } from "@/utils/Helpers";

export default function CorporationPhysicalAddressPage() {
  useGetApplicationId();
  return <PhysicalAddress />;
}
