// pages/_app.js
import ContactModalProvider from "@/components/layout/ContactModalProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SmoothScroll>
      <ContactModalProvider>
        <div className="min-h-screen bg-dark-950 text-white">
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ContactModalProvider>
    </SmoothScroll>
  );
}
