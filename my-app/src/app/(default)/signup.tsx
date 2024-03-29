import React from "react";

import SignUp from "@/screens/SignUp";
import { useHideToast } from "@/utils/Helpers";

export default function SignUpPage() {
  useHideToast();
  return <SignUp />;
}
