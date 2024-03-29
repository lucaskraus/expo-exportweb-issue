import { Tabs } from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";

import { toastConfig } from "@/utils/ToastConfig";

import "reflect-metadata";

export default function RoutesCorporationLayout() {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="information"
          options={{
            tabBarStyle: { display: "none" },
            title: "Company Information - Step 1",
            href: null,
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            tabBarStyle: { display: "none" },
            title: "Company Information - Step 2",
            href: null,
          }}
        />
        <Tabs.Screen
          name="description"
          options={{
            tabBarStyle: { display: "none" },
            title: "Company Description",
            href: null,
          }}
        />
        <Tabs.Screen
          name="localization"
          options={{
            tabBarStyle: { display: "none" },
            title: "Company Localization",
            href: null,
          }}
        />
        <Tabs.Screen
          name="registeredaddress"
          options={{
            tabBarStyle: { display: "none" },
            title: "Registered Address",
            href: null,
          }}
        />
        <Tabs.Screen
          name="physicaladdress"
          options={{
            tabBarStyle: { display: "none" },
            title: "Physical Address",
            href: null,
          }}
        />
        <Tabs.Screen
          name="addindividual"
          options={{
            tabBarStyle: { display: "none" },
            title: "Add Individual",
            href: null,
          }}
        />
        <Tabs.Screen
          name="termsandconditions"
          options={{
            tabBarStyle: { display: "none" },
            title: "Corporate Terms and Conditions",
            href: null,
          }}
        />
      </Tabs>
      <Toast config={toastConfig} />
    </>
  );
}
