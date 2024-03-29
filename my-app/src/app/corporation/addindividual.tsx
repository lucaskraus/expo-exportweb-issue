import React from "react";
import { PaperProvider } from "react-native-paper";

import AddIndividual from "@/screens/onboarding/corporation/AddIndividual";
import { useGetApplicationId } from "@/utils/Helpers";

export default function CorporationAddIndividualPage() {
  useGetApplicationId();
  return (
    <PaperProvider>
      <AddIndividual />
    </PaperProvider>
  );
}
