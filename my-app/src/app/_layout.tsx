import * as Sentry from "@sentry/react-native";
import {
  Slot,
  ErrorBoundaryProps,
  useNavigationContainerRef,
} from "expo-router";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwind-rn";

import utilities from "@/../tailwind.json";
import BugFixingImage from "@/assets/bugfixing.svg";
import Logo from "@/assets/logo.svg";
import store from "@/context/store";
import "@/locales/i18n";

import "reflect-metadata";

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: "[dsn-here]",
  debug: false,
  enableNativeCrashHandling: true,
  enableCaptureFailedRequests: true,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
    }),
  ],
});

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const { t } = useTranslation();
  Sentry.addBreadcrumb({ category: "runtime-error", data: props.error });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Logo style={{ marginTop: 20 }} />
        <View style={{ flex: 1, alignItems: "center" }}>
          <BugFixingImage width={300} height={300} />
          <Text
            style={{
              color: "#170142",
              fontSize: 24,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {t("common:errorscreen.title")}
          </Text>
          <View style={{ margin: 5, marginTop: 10 }}>
            <Text
              style={{ color: "#919191", textAlign: "center", fontSize: 14 }}
            >
              {t("common:errorscreen.subtitle")}
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: "#5D0CBA",
              alignItems: "center",
              justifyContent: "center",
              width: 160,
              height: 40,
              borderRadius: 8,
              margin: 12,
            }}
            onPress={() => props.retry()}
          >
            <Text
              style={{ color: "#FFFFFF", textAlign: "center", fontSize: 14 }}
            >
              {t("common:button.backtologin")}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Layout() {
  const ref = useNavigationContainerRef();

  React.useEffect(() => {
    if (ref) {
      routingInstrumentation.registerNavigationContainer(ref);
    }
  }, [ref]);

  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <Helmet>
          <title>Izzi Wallet</title>
        </Helmet>
        <Slot />
      </TailwindProvider>
    </Provider>
  );
}

export default Sentry.wrap(Layout);
