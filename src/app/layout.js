import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/layout";

export const metadata = {
  title: "Real estate",
  description: "Real estate consultant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}