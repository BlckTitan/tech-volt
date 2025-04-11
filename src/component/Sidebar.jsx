import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { MdOutlineEmail, MdOutlineHome, MdOutlineLocalGroceryStore, MdOutlinePhoneAndroid, MdOutlineSearch } from "react-icons/md"

  // Menu items.
const items = [
    {
      title: "Home",
      url: "#",
      icon: MdOutlineHome,
    },
    {
      title: "Shop",
      url: "/shop",
      icon: MdOutlineLocalGroceryStore,
    },
    {
      title: "Accessories",
      url: "#",
      icon: MdOutlinePhoneAndroid,
    },
    {
      title: "About Us",
      url: "#",
      icon: MdOutlineSearch,
    },
    {
      title: "Contact Us",
      url: "#",
      icon: MdOutlineEmail,
    },
  ]

  export default function SidebarComponent() {
    return (
       <Sidebar className="border-r border-gray-200 bg-white">
            <SidebarContent className="bg-white !py-12 md:!py-24">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title} className="border-l-3 border-l-white hover:border-l-gray-800 !mb-2">
                                <SidebarMenuButton asChild className="!px-2 !py-5">
                                    <a href={item.url}>
                                        <span className="text-xl cursor-pointer" >
                                            <item.icon/>
                                        </span>
                                        <span className="text-lg cursor-pointer">{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
  }
  