import { yekan } from "@/utils/fonts";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "Real estate",
  description: "Real estate consultant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <Layout>
          {children}
          <Toaster />
        </Layout>
      </body>
    </html>
  );
}