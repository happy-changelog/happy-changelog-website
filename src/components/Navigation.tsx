import Link from "next/link";

import Github from "@/logos/GitHub";
import GitLab from "@/logos/Gitlab";

import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  return (
    <nav className="flex items-center space-x-6">
      <Link
        href="#workflow"
        className="hidden md:inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-happy-600"
      >
        Workflow
      </Link>
      <Link
        href="#benefits"
        className="hidden md:inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-lavender-600"
      >
        Benefits
      </Link>
      <Link
        href="#implementation"
        className="hidden md:inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-coral-600"
      >
        Implementation
      </Link>
      <Link
        href="https://github.com/happy-changelog/happy-changelog-workflow"
        target="_blank"
        rel="noopener"
        className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-sunny-600"
      >
        <Github className="h-4 w-4 invert dark:invert-0" />
        GitHub
      </Link>
      <Link
        href="https://gitlab.com/explore/catalog/happy-changelog/happy-changelog-gitlab-ci"
        target="_blank"
        rel="noopener"
        className="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-sunny-600"
      >
        <GitLab className="h-4 w-4" />
        GitLab
      </Link>
      <ThemeToggle />
    </nav>
  );
}
