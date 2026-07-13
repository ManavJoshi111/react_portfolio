import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ModeToggle from "./ui/ModeToggle";
import { useEffect, useState } from "react";

const navItems = [
  { id: "#", sectionId: "home", title: "Home" },
  { id: "#experience", sectionId: "experience", title: "Experience" },
  { id: "#projects", sectionId: "projects", title: "Projects" },
  { id: "#tech", sectionId: "tech", title: "Tech" },
  { id: "#education", sectionId: "education", title: "Education" },
  { id: "#contact", sectionId: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("#");

  useEffect(() => {
    const handleScroll = () => {
      // Near the bottom of the page: always highlight the last section.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        setActive(navItems[navItems.length - 1].id);
        return;
      }

      // Otherwise, highlight the last section whose top has crossed
      // roughly a third down the viewport.
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = navItems[0].id;

      for (const { id, sectionId } of navItems) {
        const el = document.getElementById(sectionId);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
