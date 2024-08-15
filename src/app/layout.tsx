import type { Metadata } from "next";
import { Quicksand, Raleway } from "next/font/google";
import "./globals.css";

import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BroadBased Communications - Delivering Solutions",
    template: "%s | BroadBased Communications",
  },
  description: "Connectivity, Speed and Reliability",
};

const primary: MantineColorsTuple = [
  "#edecfd",
  "#d5d3f6",
  "#a8a4f0",
  "#7a71eb",
  "#5347e7",
  "#3c2de5",
  "#3020e5",
  "#2515cc",
  "#1e12b6",
  "#140da0",
];

const theme = createTheme({
  colors: {
    primary,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={raleway.className}>
        <Toaster />
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
