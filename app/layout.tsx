import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import iconLight from './light.svg'
import iconDark from './dark.svg'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Joseph Doundoulakis | %s",
    default: "Joseph Doundoulakis"
  },
  authors: [{name: "Joseph Doundoulakis"}],
  description: "My Nextjs resume page.",
  icons: {
		icon: [
			{
				type: 'image/svg+xml',
				media: '(prefers-color-scheme: light)',
				url: iconLight.src
			},
			{
				type: 'image/svg+xml',
				media: '(prefers-color-scheme: dark)',
				url: iconDark.src
			}
		]
	},
  manifest: null,
};

export default function RootLayout({
  children,
  footer
}: Readonly<{
  children: React.ReactNode,
  footer: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className={`bg-opacity-40 grid grid-rows-[20px_1fr_20px]
                      items-center justify-items-center
                      min-h-screen p-8 pb-20
                      gap-16 sm:p-20
                      font-[family-name:var(--font-geist-sans)]`}
          >
          <main className={`flex flex-col gap-[32px] row-start-2
                            items-center sm:items-start`}>
            {children}
          </main>
            {footer}
        </div>
      </body>
    </html>
  );
}
