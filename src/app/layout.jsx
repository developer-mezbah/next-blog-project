import SiteNavBar from "@/components/SiteNavBar";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
// import NextTopLoader from 'nextjs-toploader';

export async function generateMetadata() {
  const res = await fetch(process.env.BASE_URL + "api/SiteMeta/home");
  if (!res.ok) {
    throw new Error("Site meta data fething failed!!!!");
  }
  const data = await res.json();
  const {page, description, keywords, image} = data[0]
  return {
    title: page,
    description: description,
    keywords: keywords,
    openGraph: {
      images: image
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <NextTopLoader color="#269669" height={3} speed={200}/> */}
        <SiteNavBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
