import React from "react";

import Address from "@/screens/onboarding/individual/Address";
import { useGetApplicationId } from "@/utils/Helpers";

export default function AddressPage() {
  useGetApplicationId();
  return <Address />;
}
