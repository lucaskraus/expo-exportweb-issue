import { Tabs } from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";

import { toastConfig } from "@/utils/ToastConfig";

import "reflect-metadata";

export default function RoutesDefaultLayout() {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarStyle: { display: "none" },
            title: "Home",
            href: null,
          }}
        />
        <Tabs.Screen
          name="signup"
          options={{
            tabBarStyle: { display: "none" },
            title: "Sign Up",
            href: null,
          }}
        />
        <Tabs.Screen
          name="welcome"
          options={{
            tabBarStyle: { display: "none" },
            title: "Welcome",
            href: null,
          }}
        />
        <Tabs.Screen
          name="getready"
          options={{
            tabBarStyle: { display: "none" },
            title: "Get Ready",
            href: null,
          }}
        />
        <Tabs.Screen
          name="finish"
          options={{
            tabBarStyle: { display: "none" },
            title: "Application Finished",
            href: null,
          }}
        />
        <Tabs.Screen
          name="approved"
          options={{
            tabBarStyle: { display: "none" },
            title: "Application Approved",
            href: null,
          }}
        />
        <Tabs.Screen
          name="rejected"
          options={{
            tabBarStyle: { display: "none" },
            title: "Application Rejected",
            href: null,
          }}
        />
        <Tabs.Screen
          name="review"
          options={{
            tabBarStyle: { display: "none" },
            title: "Review Page",
            href: null,
          }}
        />
        <Tabs.Screen
          name="kyc"
          options={{
            tabBarStyle: { display: "none" },
            title: "KYC Corporation Page",
            href: null,
          }}
        />
        <Tabs.Screen
          name="investmentprofile"
          options={{
            tabBarStyle: { display: "none" },
            title: "Investment Profile Corporation Page",
            href: null,
          }}
        />
        <Tabs.Screen
          name="error"
          options={{
            tabBarStyle: { display: "none" },
            title: "Error Screen",
            href: null,
          }}
        />
        <Tabs.Screen
          name="documents"
          options={{
            tabBarStyle: { display: "none" },
            title: "Error Screen",
            href: null,
          }}
        />
        <Tabs.Screen
          name="validate"
          options={{
            tabBarStyle: { display: "none" },
            title: "Validate Sign Up Screen",
            href: null,
          }}
        />
      </Tabs>
      <Toast config={toastConfig} />
    </>
  );
}
