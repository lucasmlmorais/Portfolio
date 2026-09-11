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

  const go = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Jump to"
      description="Navigate the portfolio"
    >
      <CommandInput placeholder="Where to?" />
      <CommandList>
        <CommandEmpty>No match. Try "work" or "contact".</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => go("/")}>
            <Home />
            Home
          </CommandItem>
          <CommandItem onSelect={() => go("/work")}>
            <Briefcase />
            Selected work
          </CommandItem>
          <CommandItem onSelect={() => go("/about")}>
            <User />
            About
          </CommandItem>
          <CommandItem onSelect={() => go("/resume")}>
            <FileText />
            Resume
          </CommandItem>
          <CommandItem onSelect={() => go("/contact")}>
            <Mail />
            Contact
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Case studies">
          <CommandItem onSelect={() => go("/case-study/cms-migration")}>
            <ArrowUpRight />
            Multi-brand CMS migration
          </CommandItem>
          <CommandItem onSelect={() => go("/case-study/ordering-optimization")}>
            <ArrowUpRight />
            Ordering flow optimization
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() => {
              window.location.href = "mailto:lucasmlmorais@gmail.com";
              setOpen(false);
            }}
          >
            <Mail />
            Email Lucas
          </CommandItem>
          <CommandItem
            onSelect={() => {
              window.open("https://www.linkedin.com/in/lucasmlmorais", "_blank", "noopener,noreferrer");
              setOpen(false);
            }}
          >
            <Linkedin />
            Open LinkedIn
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
            Download resume
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
