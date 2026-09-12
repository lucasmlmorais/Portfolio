import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  Home,
  Briefcase,
  User,
  FileText,
  Mail,
  Download,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { useLocale, useTranslations } from "../../i18n/context";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const go = (segment: string) => {
    navigate(`/${locale}${segment ? `/${segment}` : ""}`);
    setOpen(false);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title={t.commandPalette.title}
      description={t.commandPalette.description}
    >
      <CommandInput placeholder={t.commandPalette.placeholder} />
      <CommandList>
        <CommandEmpty>{t.commandPalette.empty}</CommandEmpty>
        <CommandGroup heading={t.commandPalette.groupPages}>
          <CommandItem onSelect={() => go("")}>
            <Home />
            {t.commandPalette.home}
          </CommandItem>
          <CommandItem onSelect={() => go("work")}>
            <Briefcase />
            {t.commandPalette.work}
          </CommandItem>
          <CommandItem onSelect={() => go("about")}>
            <User />
            {t.commandPalette.about}
          </CommandItem>
          <CommandItem onSelect={() => go("resume")}>
            <FileText />
            {t.commandPalette.resume}
          </CommandItem>
          <CommandItem onSelect={() => go("contact")}>
            <Mail />
            {t.commandPalette.contact}
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t.commandPalette.groupCaseStudies}>
          <CommandItem onSelect={() => go("case-study/cms-migration")}>
            <ArrowUpRight />
            {t.commandPalette.cms}
          </CommandItem>
          <CommandItem onSelect={() => go("case-study/ordering-optimization")}>
            <ArrowUpRight />
            {t.commandPalette.ordering}
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t.commandPalette.groupActions}>
          <CommandItem
            onSelect={() => {
              window.location.href = "mailto:lucasmlmorais@gmail.com";
              setOpen(false);
            }}
          >
            <Mail />
            {t.commandPalette.emailAction}
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.open("https://www.linkedin.com/in/lucasmlmorais", "_blank", "noopener,noreferrer");
              setOpen(false);
            }}
          >
            <Linkedin />
            {t.commandPalette.linkedinAction}
          </CommandItem>
          <CommandItem
            onSelect={() => {
              const link = document.createElement("a");
              link.href = `${import.meta.env.BASE_URL}Lucas_Morais_Resume.pdf`;
              link.download = "Lucas_Morais_Resume.pdf";
              link.click();
              setOpen(false);
            }}
          >
            <Download />
            {t.commandPalette.downloadAction}
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
