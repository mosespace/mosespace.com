import "../styles/main.css";
import { raleway } from "../styles/fonts";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Provider from "./context/Provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";

export const metadata = {
  title: {
    default:
      "Kisakye Moses - Website Developer Ug | Full-Stack Software Developer Located in Kampala Uganda.",
    template:
      "%s | Kisakye Moses - Website Developer Ug | Full-Stack Software Developer Located in Kampala Uganda.",
  },
  description:
    "Explore Uganda's wonders with Jazz Africa Adventures. Unforgettable safaris, national parks, mountains, hiking, and chimpanzee encounters. Expert guides, personalized attention. Discover Uganda today!",
  keywords: [
    "Kisakye Moses",
    "Moses",
    "Kisakye",
    "Uncle Moses",
    "Typify Media",
    "Brand Rider",
    "Desishub",
    "Kisakye Moses",
    "Moses Kisakye",
    "Kisakye Moses LinkedIn",
    "Kisakye Moses Twitter",
    "Kisakye Moses Uganda",
    "Uncle Mo",
    "Website development",
    "website designer in Uganda",
    "website design company in Kampala",
    "Cheap website designer in Uganda",
    ".ug domain name registration Uganda",
    "website design",
    "Freelancers",
    "php Laravel Developer",
    "Coders",
    "Developers",
    "Web Designers",
    "Website Design",
    "Graphic design website",
    "Graphic design company",
    "graphic design crowd sourcing website",
    "Fliers Banners design Business Card design",
    "graphic design",
    "Graphics designer",
    "Web Developer Forest Mall Lugogo",
    "Forest Mall Lugogo",
    "Web Developer Ntinda",
    "Website Developer Kireka",
    "Responsive design",
    "Wordpress Developer",
    "Front-end Developer",
    "Front-end Developer",
    "Back-end Developer",
    "Back-end Developer",
    "HTML Developer",
    "CSS Developer",
    "JavaScript Developer",
    "PHP Developer",
    "WordPress Development",
    "E-commerce",
    "Mobile app Developer",
    "Logo design",
    "Branding",
    "Digital marketing Kampala",
    "SEO optimization Kampala",
    "Social media marketing",
    "Content management system",
    "Web hosting",
    "Domain registration",
    "Website maintenance",
    "Custom web development",
    "CMS customization",
    "Print design",
    "Brochure design",
    "Business card design",
    "Flyer design",
    "Poster design",
    "Banner design",
    "Packaging design",
    "Label design",
    "Illustrative design",
    "Infographic design",
    "Motion graphics",
    "Animation",
    "Brand identity",
    "Logo branding",
    "Color palette",
    "Visual consistency",
    "Cross-browser compatibility",
    "Responsive images",
    "Website speed optimization",
    "Google Analytics",
    "Keyword research",
    "Digital strategy",
    "Online presence",
    "Creative solutions",
    "Art direction",
    "Photography",
    "Image editing",
    "Video editing",
    "Website templates",
    "Landing page design",
    "Responsive email design",
    "Newsletter design",
    "Search engine optimization",
    "Local SEO",
    "Pay-per-click advertising",
    "Social media advertising",
    "Brand strategy",
    "Website security",
    "SSL certificate",
    "Mobile app design",
    "E-commerce platforms",
    "Payment gateway integration",
    "Website accessibility",
    "Blog design",
    "Portfolio design",
    "Project management Developer",
  ],
  authors: [{ name: "Kisakye Moses", url: "https://www.mosespace.com" }],
  creator: "Kisakye Moses a.k.a Uncle Moses Ug |BrandRider",
  publisher: "Kisakye Moses a.k.a Uncle Moses Ug |BrandRider",
  openGraph: {
    title:
      "Kisakye Moses - Website Developer Ug | Full-Stack Software Developer Located in Kampala Uganda.",
    description:
      "Do you need a website developer at prices ranging from 300K up-words, Kisakye Moses is the best developer you should contact right now.. on WhatsApp +256704122863",
    url: "https://www.mosespace.com",
    siteName: "Kisakye Moses",
    images: [
      {
        url: "https://www.mosespace.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    handle: "@bantu_creative",
    site: "@bantu_creative",
    cardType: "summary_large_image",
    title:
      "Kisakye Moses - Website Developer Ug | Full-Stack Software Developer Located in Kampala Uganda.",
    description:
      "Explore Uganda's wonders with Jazz Africa Adventures. Unforgettable safaris, national parks, mountains, hiking, and chimpanzee encounters. Expert guides, personalized attention. Discover Uganda today!",
  },
  alternates: {
    canonical: "https://www.mosespace.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning={true}>
      <body className={`${raleway.className}`}>
        <Provider>
          <ToastContainer position='top-center' />
          <div className='dark:bg-bgBlack bg-white w-full overflow-hidden bg-black-radial'>
            <div className='container max-w-4xl m-auto space-y-8 px-6 py-12 text-zinc-950 dark:text-white md:px-12 lg:px-20'>
              <Header />
              <ScrollTop />
              {children}
              <Footer />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
