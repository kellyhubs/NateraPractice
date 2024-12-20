//layout (structure) of the app 

import 'bootstrap/dist/css/bootstrap.css' //bootstrap
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"; //bootstrap icons

export const metadata = {
  title: 'Natera Practice',
  description: 'Extra coding practice',
}; 

// layout
export default function RootLayout({ children }: { children: React.ReactNode }) {  //passing components as children 
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}