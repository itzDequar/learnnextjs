import "@/app/ui/global.css";
import "app/dashboard/nav-links";
import NavLinks from "app/dashboard/nav-links";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`antialiased`}>
        {children}
        <NavLinks />
      </body>
    </html>
  );
}
