import React from "react";

import Nationality from "@/screens/onboarding/individual/Nationality";
import { useGetApplicationId } from "@/utils/Helpers";

export default function NationalityPage() {
  useGetApplicationId();
  return <Nationality />;
}
