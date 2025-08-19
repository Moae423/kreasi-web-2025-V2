import localFont from "next/font/local";
export const Satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Variable.woff",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../assets/fonts/Satoshi-Variable.woff2",
      style: "normal",
      weight: "100 900",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});
