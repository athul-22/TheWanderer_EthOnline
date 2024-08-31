import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookieToInitialState } from "wagmi";
import { config } from "@/lib/wagmi";
import { headers } from "next/headers";
import Providers from "@/lib/providers";
import AppKitProvider from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const initialState = cookieToInitialState(config, headers().get('cookie'))
  function cn(arg0: string, variable: any): string | undefined {
    throw new Error("Function not implemented.");
  }

	return (
		<html lang='en' suppressHydrationWarning>
			<Providers>
				<body>
				<AppKitProvider  initialState={initialState}>{children}</AppKitProvider >
				</body>
			</Providers>
		</html>
	)
}
