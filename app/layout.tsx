import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechTrek | Code Your Commerce Canvas',
  description: 'Join TechTrek, the inaugural hackathon by IEEE SRM. Code your E-commerce website, collaborate, and innovate with like-minded enthusiasts.',
}

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children as React.ReactElement}
      </body>
    </html>
  )
}