import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className="p-0 m-0 bg-primary dark:bg-primary"
      >
        {children}
      </body>
    </html>
  );
}
