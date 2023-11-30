import { Metadata } from "next";
import "../styles/Common.scss";

interface LayoutProps {
  home: React.ReactNode;
  navigation: React.ReactNode;
  projects: React.ReactNode;
  professional: React.ReactNode;
  socials: React.ReactNode;
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: ".Danny Silva",
  description: "Danny's portfolio",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout(props: LayoutProps) {
  const { children, navigation, home, projects, professional, socials } = props;
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col min-h-screen w-full h-full relative overflow-x-hidden isolate ">
          <span className="bg-gray bg-gradient-to-b from-pink/20 to-purple/20 w-full h-screen fixed -z-10" />
          <span className="bg-[url('/background-noise.png')] w-full h-screen fixed -z-10" />
          {navigation}
          {children}
          {home}
          {projects}
          {professional}
          {socials}
        </main>
      </body>
    </html>
  );
}
