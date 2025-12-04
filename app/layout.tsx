export const metadata = {
  title: "Surya J | Portfolio",
  description: "AI • Flutter • Cyberpunk Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
