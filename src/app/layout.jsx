import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";
// import { ThemeContext } from "@/context/ThemeContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Footer from "@/components/Footer/Footer";

const BodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Teashop",
  description:
    "Discover a world of endless shopping possibilities at out online store. Browse, choose, and order your favorite products from the comfort fo your home.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={BodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
