import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar"
import "./globals.css";
import SidebarComponent from "@/component/Sidebar";

export const metadata: Metadata = {
  title: "TechVolt",
  description: "TechVolt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <SidebarProvider defaultOpen={false}>

      <html lang="en">
        <body>
          <div className="w-full h-screen flex">  
            <aside className="w-fit h-full">
              <SidebarComponent/>
            </aside>

              {children}

          </div>
        </body>
      </html>
    
    </SidebarProvider>
  );
}
