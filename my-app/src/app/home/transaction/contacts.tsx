import React from "react";

import Contacts from "@/screens/home/transaction/Contacts";
import { useGetAuthentication } from "@/utils/Helpers";

export default function ContactsPage() {
  useGetAuthentication();
  return <Contacts />;
}
