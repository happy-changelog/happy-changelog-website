import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Github from "@/logos/GitHub";
import GitLab from "@/logos/Gitlab";

import { Button } from "@/components/ui/button";

import { implementations } from "@/lib/consts";

export function ImplementationSection() {
  return (
    <section
      id="implementation"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-coral-50 dark:from-background dark:to-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <span className="inline-block rounded-full bg-coral-100 dark:bg-coral-900 px-3 py-1 text-sm text-coral-800 dark:text-coral-200 mb-2">
              Get Started
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Implementing{" "}
              <span className="text-sunny-gradient">Happy Changelog</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A flexible framework that can be adapted to your workflow
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 p-6 rounded-lg border bg-white dark:bg-card shadow-md happy-card">
            <h3 className="text-xl font-bold text-happy-700 dark:text-happy-400">
              CI/CD Integration
            </h3>
            <p className="text-muted-foreground">
              Happy Changelog can be implemented in any CI/CD system. The core
              workflow involves:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>
                Extracting changelog entries from PR descriptions when PRs are
                merged
              </li>
              <li>
                Determining the appropriate version bump based on change levels
              </li>
              <li>Updating the CHANGELOG.md file with the new entries</li>
              <li>
                Updating version numbers in relevant files (package.json, etc.)
              </li>
              <li>Creating a Git tag for the new version</li>
            </ol>
            <p className="text-muted-foreground flex items-center gap-2">
              Sample implementations:
            </p>
            <p>
              <span className="inline-flex items-center mr-2">
                <Link
                  href={implementations.GitHub}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="inline-flex items-center hover:text-happy-600 dark:hover:text-happy-300 transition-colors">
                    <Github className="h-4 w-4 mr-1 text-happy-700 invert dark:invert-0 dark:text-happy-400" />
                    Available for GitHub Actions
                  </span>
                </Link>
              </span>
              <span className="inline-flex items-center mr-2">
                <Link
                  href={implementations.GitLab}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="inline-flex items-center hover:text-happy-600 dark:hover:text-happy-300 transition-colors">
                    <GitLab className="h-4 w-4 mr-1" />
                    Available in GitLab CI Catalog
                  </span>
                </Link>
              </span>
            </p>
          </div>
          <div className="space-y-4 p-6 rounded-lg border bg-white dark:bg-card shadow-md coral-card">
            <h3 className="text-xl font-bold text-coral-700 dark:text-coral-400">
              PR Template
            </h3>
            <p className="text-muted-foreground">
              Add a standardized section to your PR template to encourage
              consistent changelog entries:
            </p>
            <div className="space-y-4">
              <div className="rounded-md bg-coral-50 dark:bg-coral-900/50 p-4 font-mono text-sm border border-coral-200 dark:border-coral-800">
                <p className="mb-2 text-coral-800 dark:text-coral-200 font-semibold">
                  Option 1: Details Element
                </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  &lt;details&gt;
                </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  &lt;summary&gt;Changelog: major|minor|patch&lt;/summary&gt;
                </p>
                <p className="mb-2 text-coral-600 dark:text-coral-400">
                  &lt;!-- Delete sections that are not relevant --&gt;
                </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Added
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Changed
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Fixed
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  &lt;/details&gt;
                </p>
              </div>

              <div className="rounded-md bg-coral-50 dark:bg-coral-900/50 p-4 font-mono text-sm border border-coral-200 dark:border-coral-800">
                <p className="mb-2 text-coral-800 dark:text-coral-200 font-semibold">
                  Option 2: Command Syntax
                </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  /changelog major|minor|patch
                </p>
                <p className="mb-2 text-coral-600 dark:text-coral-400">
                  &lt;!-- Delete sections that are not relevant --&gt;
                </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Added
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Changed
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Fixed
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  /-changelog
                </p>
              </div>
              <div className="rounded-md bg-coral-50 dark:bg-coral-900/50 p-4 font-mono text-sm border border-coral-200 dark:border-coral-800">
                <p className="mb-2 text-coral-800 dark:text-coral-200 font-semibold">
                  Option 3: Markdown syntax
                </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ## Changelog major|minor|patch
                </p>
                <p className="mb-2 text-coral-600 dark:text-coral-400">
                  &lt;!-- Delete sections that are not relevant --&gt;
                </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Added
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Changed
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">
                  ### Fixed
                </p>
                <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                <p className="mb-2 text-coral-800 dark:text-coral-200">---</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-8">
          <div className="rounded-lg border bg-white dark:bg-card p-6 shadow-md sunny-card">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-sunny-700 dark:text-sunny-400">
                Getting Started
              </h3>
              <p className="text-muted-foreground">
                Happy Changelog is a workflow framework, not a specific tool. To
                implement it in your project:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                <li>Add the PR template to your repository</li>
                <li>
                  Set up CI/CD scripts to process changelog entries from PR
                  descriptions
                </li>
                <li>Configure version bumping based on change levels</li>
                <li>Implement release note generation for your platform</li>
              </ol>
              <div className="pt-4 flex flex-col gap-4">
                <Link
                  href={implementations.GitHub}
                  target="_blank"
                  rel="noopener"
                >
                  <Button className="bg-gradient-to-r from-happy-500 to-lavender-500 hover:from-happy-600 hover:to-lavender-600 transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Implementation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href={implementations.GitLab}
                  target="_blank"
                  rel="noopener"
                >
                  <Button className="bg-gradient-to-r from-happy-500 to-lavender-500 hover:from-happy-600 hover:to-lavender-600 transition-all duration-300">
                    <GitLab className="mr-2 h-4 w-4" />
                    View GitLab Implementation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
