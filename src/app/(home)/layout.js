import MainLayout from "./_components/layout/main/MainLayout";
import QueryProvider from "@/providers/react-query-provider";
import { Toaster } from "react-hot-toast";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <>
      <QueryProvider>
        <MainLayout>{children}</MainLayout>
      </QueryProvider>

      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{
          top: 80,
        }}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#1d3855",
            color: "#fff",
          },
        }}
      />
    </>
  );
}
