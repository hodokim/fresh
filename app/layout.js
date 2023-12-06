import './globals.css'
import Link from "next/link";

export default function RootLayout({children}) {
  return (
      <html lang="en">
      <body>
        <div className="navbar">
            <Link href="/">home</Link>
            <Link href="/list">list</Link>
        </div>
        {children}
      </body>
      </html>
)
}
