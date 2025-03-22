import { Github, Gitlab } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  return (
    <nav className="flex items-center space-x-6">
      <Link
        href="#workflow"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-happy-600"
      >
        Workflow
      </Link>
      <Link
        href="#benefits"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-lavender-600"
      >
        Benefits
      </Link>
      <Link
        href="#implementation"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-coral-600"
      >
        Implementation
      </Link>
      <Link
        href="https://github.com/happy-changelog/happy-changelog-workflow"
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-sunny-600"
      >
        <Github className="h-4 w-4" />
        GitHub
      </Link>
      <span className="flex items-center gap-1 text-sm font-medium text-muted-foreground/40 cursor-not-allowed">
        <Gitlab className="h-4 w-4" />
        GitLab
      </span>
      <ThemeToggle />
    </nav>
  );
}
