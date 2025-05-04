import React from "react";
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "../ui/button";

const ContactSection = () => {
  const icons = [
    {
      icon: <MailIcon className="size-6" />,
      link: "mailto:manavjoshi154@gmail.com",
    },
    {
      icon: <GithubIcon className="size-6" />,
      link: "https://github.com/ManavJoshi111",
    },
    {
      icon: <TwitterIcon className="size-6" />,
      link: "https://twitter.com/Man___111",
    },
    {
      icon: <LinkedinIcon className="size-6" />,
      link: "https://www.linkedin.com/in/manavhjoshi",
    },
  ];

  const renderIcons = () =>
    icons.map(({ icon, link }) => (
      <Button
        variant="ghost"
        className="px-6 pt-2 mb-10"
        onClick={() => window.open(link, "_blank")}
      >
        {icon}
      </Button>
    ));

  return (
    <section className="space-y-6 px-4 py-6 sm:px-10 md:px-20">
      <h1 className="text-3xl font-bold mb-8 pt-6" id="contact">
        💬 Contact Me
      </h1>
      {renderIcons()}
    </section>
  );
};

export default ContactSection;
