import '../globals.css';

import { Navbar } from "./Navbar";

export default async function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang='en'>
      <body className='min-w-[375px]'>
        <Navbar />
        <main className='pt-[100px] '>{children}</main>
      </body>
    </html>
  )
}