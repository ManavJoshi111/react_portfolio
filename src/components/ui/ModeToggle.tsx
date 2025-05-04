import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/context/ThemeProvider";
import { useState } from "react";

const ModeToggle = () => {
  const { setTheme } = useTheme();
  const [dark, setDark] = useState<boolean>(true);

  const handleThemeChange = () => {
    setDark((prev) => !prev);
    setTheme(dark ? "light" : "dark");
  };

  return (
    <Button
      role="button"
      variant="blank"
      tabIndex={0}
      onClick={() => handleThemeChange()}
    >
      {dark ? <Sun color="white" /> : <Moon color="black" />}
    </Button>
  );
};

export default ModeToggle;
