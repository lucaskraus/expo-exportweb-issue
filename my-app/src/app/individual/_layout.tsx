import { Tabs } from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";

import { toastConfig } from "@/utils/ToastConfig";

import "reflect-metadata";

export default function RoutesIndividualLayout() {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="name"
          options={{
            tabBarStyle: { display: "none" },
            title: "Personal Information - Step 1",
            href: null,
          }}
        />
        <Tabs.Screen
          name="information"
          options={{
            tabBarStyle: { display: "none" },
            title: "Personal Information - Step 2",
            href: null,
          }}
        />
        <Tabs.Screen
          name="nationality"
          options={{
            tabBarStyle: { display: "none" },
            title: "Nationality and Passport",
            href: null,
          }}
        />
        <Tabs.Screen
          name="address"
          options={{
            tabBarStyle: { display: "none" },
            title: "Mailing Address",
            href: null,
          }}
        />
        <Tabs.Screen
          name="termsandconditions"
          options={{
            tabBarStyle: { display: "none" },
            title: "Terms and Conditions",
            href: null,
          }}
        />
        <Tabs.Screen
          name="employment"
          options={{
            tabBarStyle: { display: "none" },
            title: "Employment and Occupation",
            href: null,
          }}
        />
      </Tabs>
      <Toast config={toastConfig} />
    </>
  );
}
