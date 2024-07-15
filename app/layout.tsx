
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';


// 添加了 Tailwind 的 antialiased 类，该类可使字体更加平滑
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
