import './globals.css'

export const metadata = {
  title: 'Red Onion Search',
  description: 'Red Onion Search App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
