import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Dimensions } from "react-native";
import Toast from "react-native-toast-message";
import { useTailwind } from "tailwind-rn";

import VerticalMenu from "@/components/menu/VerticalMenu";
import { useAppSelector } from "@/context/hooks";
import AccountInformation from "@/utils/AccountInformation";
import { useGetAuthentication } from "@/utils/Helpers";
import { useLg } from "@/utils/Responsive";
import { toastConfig } from "@/utils/ToastConfig";

import "reflect-metadata";

export default function RoutesHomeLayout() {
  const [isLgDevice, setIsLgDevice] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const globalValues = useAppSelector((state: any) => state);
  const tailwind = useTailwind();

  useEffect(() => {
    const updateLayout = () => {
      const screenDimensions = Dimensions.get("window");
      setIsLgDevice(screenDimensions.width > 1024);
    };

    updateLayout();

    const subscription = Dimensions.addEventListener("change", updateLayout);

    return () => subscription.remove();
  }, []);

  useGetAuthentication();
  return (
    <>
      <AccountInformation />
      <View style={tailwind("grow bg-white1")}>
        <View style={tailwind(`w-full h-full ${useLg("flex-row")}`)}>
          {isLgDevice && (
            <View>
              <VerticalMenu name={customerName || ""} />
            </View>
          )}
          <View style={tailwind(`flex-grow ${useLg("px-20 py-6")}`)}>
            <Tabs
              screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#5D0CBA",
              }}
            >
              <Tabs.Screen
                name="index"
                options={{
                  title: "Home",
                  ...(isLgDevice
                    ? {
                        tabBarStyle: { display: "none" },
                        href: null,
                      }
                    : {
                        tabBarIcon: ({ color, size }) => (
                          <Ionicons
                            name="home-outline"
                            color={color}
                            size={size}
                          />
                        ),
                      }),
                }}
              />
              <Tabs.Screen
                name="transaction/register"
                options={{
                  title: "Register Counterparty",
                  ...(isLgDevice
                    ? { tabBarStyle: { display: "none" }, href: null }
                    : {
                        href: null,
                      }),
                }}
              />
              <Tabs.Screen
                name="transaction/contacts"
                options={{
                  title: "Contacts",
                  ...(isLgDevice
                    ? { tabBarStyle: { display: "none" }, href: null }
                    : {
                        href: null,
                      }),
                }}
              />
              <Tabs.Screen
                name="transaction/profile"
                options={{
                  title: "Account Holder Profile",
                  ...(isLgDevice
                    ? { tabBarStyle: { display: "none" }, href: null }
                    : {
                        href: null,
                      }),
                }}
              />
              <Tabs.Screen
                name="transaction/account"
                options={{
                  title: "Recipient Account Information",
                  ...(isLgDevice
                    ? { tabBarStyle: { display: "none" }, href: null }
                    : {
                        href: null,
                      }),
                }}
              />
              <Tabs.Screen
                name="transaction/accountaddress"
                options={{
                  title: "Recipient Account Address",
                  ...(isLgDevice
                    ? { tabBarStyle: { display: "none" }, href: null }
                    : {
                        href: null,
                      }),
                }}
              />
              <Tabs.Screen
                name="transaction/counterparty"
                options={{
                  title: "Counterparty Registered Confirmation",
                  ...(isLgDevice
                    ? { tabBarStyle: { display: "none" }, href: null }
                    : {
                        href: null,
                      }),
                }}
              />
              <Tabs.Screen
                name="transaction/intermediary"
                options={{
                  title: "Intermediary Bank Information",
                  ...(isLgDevice
                    ? { tabBarStyle: { display: "none" }, href: null }
                    : {
                        href: null,
                      }),
                }}
              />
              <Tabs.Screen
                name="transaction/amount"
                options={{
                  title: "Transaction Send Amount",
                  ...(isLgDevice
                    ? { tabBarStyle: { display: "none" }, href: null }
                    : {
                        href: null,
                      }),
                }}
              />
            </Tabs>
          </View>
        </View>
      </View>
      <Toast config={toastConfig} />
    </>
  );
}
