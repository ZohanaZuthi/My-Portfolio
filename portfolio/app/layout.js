import "./globals.css";

export const metadata = {
  title: "Nazifa Fairuz Zuthi | Portfolio",
  description: "Full-stack developer and AI/ML enthusiast portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}





