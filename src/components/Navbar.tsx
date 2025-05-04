import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ModeToggle from "./ui/ModeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState<string>("#");

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setActive(window.location.hash);
    });
  }, []);

  const navItems = [
    { id: "#", title: "Home" },
    { id: "#experience", title: "Experience" },
    { id: "#projects", title: "Projects" },
    { id: "#tech", title: "Tech" },
    { id: "#education", title: "Education" },
    { id: "#contact", title: "Contact" },
  ];

  const renderNavigationItems = () =>
    navItems.map(({ id, title }) => (
      <NavigationMenuItem
        key={id}
        className={`p-2 hover:text-primary ${
          active === id || (active === "" && id === "#") ? "text-primary" : ""
        }`}
      >
        <a href={id}>{title}</a>
      </NavigationMenuItem>
    ));

  return (
    <div className="fixed top-0 left-0 w-full py-3 z-50 bg-background">
      <div className="flex justify-end items-center w-full px-4 sm:px-10 md:px-20">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap items-center gap-2 sm:gap-4">
            {renderNavigationItems()}
            <ModeToggle />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
