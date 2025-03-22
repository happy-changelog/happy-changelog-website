import Link from "next/link"
import { ArrowRight, GitMerge, GitPullRequest, Package, Github, Sparkles, Zap, Check, Gitlab } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Sparkles className="h-6 w-6 text-happy-500 animate-pulse-gentle" />
            <span className="text-gradient">Happy Changelog</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
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
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-happy-50 dark:from-background dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    <span className="text-gradient">Happy Changelog</span>
                  </h1>
                  <p className="text-xl text-lavender-700 dark:text-lavender-300 font-medium">
                    An open workflow framework for managing changelogs through pull request descriptions
                  </p>
                  <p className="max-w-[600px] text-muted-foreground mt-4">
                    Happy Changelog is a free, open workflow that eliminates changelog conflicts by moving changelog
                    entries to PR descriptions. It automates version bumping and release notes generation based on
                    semantic versioning principles.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#workflow">
                    <Button className="bg-happy-500 hover:bg-happy-600">
                      Learn how it works
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-8 shadow-md happy-card">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-happy-700 dark:text-happy-400">The Problem</h3>
                    <p className="text-muted-foreground">Traditional changelog management leads to:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Frequent merge conflicts in CHANGELOG.md</li>
                      <li>Inconsistent formatting across entries</li>
                      <li>Manual version bumping prone to errors</li>
                      <li>Disconnected release notes</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-happy-700 dark:text-happy-400">The Solution</h3>
                    <p className="text-muted-foreground">
                      Happy Changelog moves entries to PR descriptions and automates the rest:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Zero changelog merge conflicts</li>
                      <li>Consistent entry format</li>
                      <li>Automated semantic versioning</li>
                      <li>Integrated release notes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="workflow"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-lavender-50 dark:from-background dark:to-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <span className="inline-block rounded-full bg-lavender-100 dark:bg-lavender-900 px-3 py-1 text-sm text-lavender-800 dark:text-lavender-200 mb-2">
                  Simple Process
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  The <span className="text-gradient">Happy Changelog</span> Workflow
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  A simple, three-step process that integrates with your existing development workflow
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-md happy-card transform transition-transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-100 dark:bg-lavender-900">
                  <GitPullRequest className="h-6 w-6 text-lavender-600 dark:text-lavender-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-lavender-700 dark:text-lavender-300">1. Document in PR</h3>
                  <p className="text-muted-foreground">
                    Add a "Changelog" section to your pull request description with appropriate change categories
                    (Added, Changed, Fixed, etc.) and indicate the change level (major/minor/patch).
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-md sunny-card transform transition-transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunny-100 dark:bg-sunny-900">
                  <GitMerge className="h-6 w-6 text-sunny-600 dark:text-sunny-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-sunny-700 dark:text-sunny-300">2. Merge & Automate</h3>
                  <p className="text-muted-foreground">
                    When merged, a CI/CD process extracts the changelog entries, updates the CHANGELOG.md file, and
                    bumps the version in package.json based on the highest change level.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-md coral-card transform transition-transform hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 dark:bg-coral-900">
                  <Package className="h-6 w-6 text-coral-600 dark:text-coral-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-coral-700 dark:text-coral-300">3. Release</h3>
                  <p className="text-muted-foreground">
                    Create GitHub or GitLab releases with a single command, which automatically compiles all changes
                    since the last release into structured release notes.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-8">
              <div className="rounded-lg border bg-card p-8 shadow-md lavender-card">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-lavender-700 dark:text-lavender-300">
                      Example PR Description Formats
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h4 className="font-medium text-lavender-600 dark:text-lavender-400">
                          Format 1: Details Element
                        </h4>
                        <div className="rounded-md bg-lavender-50 dark:bg-lavender-900/50 p-4 font-mono text-sm border border-lavender-200 dark:border-lavender-800">
                          <p className="mb-2 font-semibold text-lavender-800 dark:text-lavender-200">&lt;details&gt;</p>
                          <p className="mb-2 font-semibold text-lavender-800 dark:text-lavender-200">
                            &lt;summary&gt;Changelog: minor&lt;/summary&gt;
                          </p>
                          <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">### Added</p>
                          <p className="mb-2 text-lavender-900 dark:text-lavender-100">
                            - Dark mode support to the dashboard
                          </p>
                          <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">### Fixed</p>
                          <p className="mb-1 text-lavender-900 dark:text-lavender-100">
                            - Alignment issues in mobile navigation
                          </p>
                          <p className="text-lavender-900 dark:text-lavender-100">- Documentation for API endpoints</p>
                          <p className="mt-2 font-semibold text-lavender-800 dark:text-lavender-200">
                            &lt;/details&gt;
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-lavender-600 dark:text-lavender-400">
                          Format 2: Command Syntax
                        </h4>
                        <div className="rounded-md bg-lavender-50 dark:bg-lavender-900/50 p-4 font-mono text-sm border border-lavender-200 dark:border-lavender-800">
                          <p className="mb-2 font-semibold text-lavender-800 dark:text-lavender-200">
                            /changelog minor
                          </p>
                          <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">### Added</p>
                          <p className="mb-2 text-lavender-900 dark:text-lavender-100">
                            - Dark mode support to the dashboard
                          </p>
                          <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">### Fixed</p>
                          <p className="mb-1 text-lavender-900 dark:text-lavender-100">
                            - Alignment issues in mobile navigation
                          </p>
                          <p className="text-lavender-900 dark:text-lavender-100">- Documentation for API endpoints</p>
                          <p className="mt-2 font-semibold text-lavender-800 dark:text-lavender-200">/-changelog</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-happy-500 dark:text-happy-400 animate-bounce-slow" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-happy-700 dark:text-happy-400">
                      Generated Changelog Entry
                    </h3>
                    <div className="rounded-md bg-happy-50 dark:bg-happy-900/50 p-4 font-mono text-sm border border-happy-200 dark:border-happy-800">
                      <p className="mb-2 font-semibold text-happy-800 dark:text-happy-200">## [1.2.0] - 2025-03-18</p>
                      <p className="mb-2 font-semibold text-happy-700 dark:text-happy-300">### Added</p>
                      <p className="mb-2 text-happy-900 dark:text-happy-100">- Dark mode support to the dashboard</p>
                      <p className="mb-2 font-semibold text-happy-700 dark:text-happy-300">### Fixed</p>
                      <p className="mb-1 text-happy-900 dark:text-happy-100">- Alignment issues in mobile navigation</p>
                      <p className="text-happy-900 dark:text-happy-100">- Documentation for API endpoints</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-sunny-50 dark:from-background dark:to-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <span className="inline-block rounded-full bg-sunny-100 dark:bg-sunny-900 px-3 py-1 text-sm text-sunny-800 dark:text-sunny-200 mb-2">
                  Why Choose This Workflow
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Why Use <span className="text-sunny-gradient">Happy Changelog</span>?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Practical benefits for development teams of all sizes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md happy-card">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-happy-100 dark:bg-happy-900 mt-1">
                      <Check className="h-4 w-4 text-happy-600 dark:text-happy-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-happy-700 dark:text-happy-400">No More Merge Conflicts</h3>
                      <p className="text-muted-foreground">
                        Since changelog entries are added to PR descriptions rather than directly to the CHANGELOG.md
                        file, merge conflicts on the changelog become a thing of the past.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md lavender-card">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lavender-100 dark:bg-lavender-900 mt-1">
                      <Check className="h-4 w-4 text-lavender-600 dark:text-lavender-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-lavender-700 dark:text-lavender-400">
                        Semantic Versioning Compliance
                      </h3>
                      <p className="text-muted-foreground">
                        By specifying the change level (major/minor/patch) in the PR description, the framework
                        automatically determines the correct version bump according to semver principles.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md sunny-card">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sunny-100 dark:bg-sunny-900 mt-1">
                      <Check className="h-4 w-4 text-sunny-600 dark:text-sunny-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-sunny-700 dark:text-sunny-400">Consistent Format</h3>
                      <p className="text-muted-foreground">
                        Follows the widely-adopted Keep a Changelog format, ensuring consistency across all entries and
                        making changelogs more readable for users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md coral-card">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-coral-100 dark:bg-coral-900 mt-1">
                      <Check className="h-4 w-4 text-coral-600 dark:text-coral-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-coral-700 dark:text-coral-400">Context-Rich Entries</h3>
                      <p className="text-muted-foreground">
                        PR descriptions typically contain more context than commit messages, resulting in more
                        meaningful and useful changelog entries that better explain the changes to users.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md happy-card">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-happy-100 dark:bg-happy-900 mt-1">
                      <Check className="h-4 w-4 text-happy-600 dark:text-happy-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-happy-700 dark:text-happy-400">Automated Release Notes</h3>
                      <p className="text-muted-foreground">
                        Generate comprehensive release notes for GitHub or GitLab releases automatically, saving time
                        and ensuring consistency between your changelog and release notes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md lavender-card">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lavender-100 dark:bg-lavender-900 mt-1">
                      <Check className="h-4 w-4 text-lavender-600 dark:text-lavender-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-lavender-700 dark:text-lavender-400">Framework Agnostic</h3>
                      <p className="text-muted-foreground">
                        Works with any programming language or framework. The workflow principles can be implemented in
                        any CI/CD system and version control platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  Implementing <span className="text-sunny-gradient">Happy Changelog</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  A flexible framework that can be adapted to your workflow
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4 p-6 rounded-lg border bg-white dark:bg-card shadow-md happy-card">
                <h3 className="text-xl font-bold text-happy-700 dark:text-happy-400">CI/CD Integration</h3>
                <p className="text-muted-foreground">
                  Happy Changelog can be implemented in any CI/CD system. The core workflow involves:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Extracting changelog entries from PR descriptions when PRs are merged</li>
                  <li>Determining the appropriate version bump based on change levels</li>
                  <li>Updating the CHANGELOG.md file with the new entries</li>
                  <li>Updating version numbers in relevant files (package.json, etc.)</li>
                  <li>Creating a Git tag for the new version</li>
                </ol>
                <p className="text-muted-foreground mt-4 flex items-center gap-2">
                  Sample implementations:
                  <span className="inline-flex items-center">
                    <Github className="h-4 w-4 mr-1 text-happy-700 dark:text-happy-400" /> Available for GitHub Actions
                  </span>
                  <span className="inline-flex items-center ml-2 text-muted-foreground/60">
                    <Gitlab className="h-4 w-4 mr-1" /> GitLab CI implementation coming soon
                  </span>
                </p>
              </div>
              <div className="space-y-4 p-6 rounded-lg border bg-white dark:bg-card shadow-md coral-card">
                <h3 className="text-xl font-bold text-coral-700 dark:text-coral-400">PR Template</h3>
                <p className="text-muted-foreground">
                  Add a standardized section to your PR template to encourage consistent changelog entries:
                </p>
                <div className="space-y-4">
                  <div className="rounded-md bg-coral-50 dark:bg-coral-900/50 p-4 font-mono text-sm border border-coral-200 dark:border-coral-800">
                    <p className="mb-2 text-coral-800 dark:text-coral-200 font-semibold">Option 1: Details Element</p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">&lt;details&gt;</p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">
                      &lt;summary&gt;Changelog: major|minor|patch&lt;/summary&gt;
                    </p>
                    <p className="mb-2 text-coral-600 dark:text-coral-400">
                      &lt;!-- Delete sections that are not relevant --&gt;
                    </p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">### Added</p>
                    <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">### Changed</p>
                    <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">### Fixed</p>
                    <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">&lt;/details&gt;</p>
                  </div>

                  <div className="rounded-md bg-coral-50 dark:bg-coral-900/50 p-4 font-mono text-sm border border-coral-200 dark:border-coral-800">
                    <p className="mb-2 text-coral-800 dark:text-coral-200 font-semibold">Option 2: Command Syntax</p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">/changelog major|minor|patch</p>
                    <p className="mb-2 text-coral-600 dark:text-coral-400">
                      &lt;!-- Delete sections that are not relevant --&gt;
                    </p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">### Added</p>
                    <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">### Changed</p>
                    <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">### Fixed</p>
                    <p className="mb-2 text-coral-900 dark:text-coral-100">- </p>
                    <p className="mb-2 text-coral-800 dark:text-coral-200">/-changelog</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-8">
              <div className="rounded-lg border bg-white dark:bg-card p-6 shadow-md sunny-card">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-sunny-700 dark:text-sunny-400">Getting Started</h3>
                  <p className="text-muted-foreground">
                    Happy Changelog is a workflow framework, not a specific tool. To implement it in your project:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                    <li>Add the PR template to your repository</li>
                    <li>Set up CI/CD scripts to process changelog entries from PR descriptions</li>
                    <li>Configure version bumping based on change levels</li>
                    <li>Implement release note generation for your platform</li>
                  </ol>
                  <div className="pt-4 flex flex-col gap-4">
                    <Link href="https://github.com/happy-changelog/happy-changelog-workflow">
                      <Button className="bg-gradient-to-r from-happy-500 to-lavender-500 hover:from-happy-600 hover:to-lavender-600 transition-all duration-300">
                        <Github className="mr-2 h-4 w-4" />
                        View GitHub Implementation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <p className="text-sm text-muted-foreground italic flex items-center justify-center">
                      <Gitlab className="mr-2 h-4 w-4" />
                      GitLab CI/CD implementation coming soon!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-lavender-50 dark:from-background dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <span className="inline-block rounded-full bg-happy-100 dark:bg-happy-900 px-3 py-1 text-sm text-happy-800 dark:text-happy-200 mb-2">
                  Personal Note
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About the <span className="text-gradient">Author</span>
                </h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border bg-white dark:bg-card p-8 shadow-md happy-card">
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground italic">
                    "I grew tired of resolving conflicts in changelogs. I never liked formalized commit messages in PRs.
                    So I decided to create something better."
                  </p>
                  <p className="text-muted-foreground">
                    My journey with changelog management started with frustration and ended with automation. Along the
                    way, I created:
                  </p>
                  <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                    <li>
                      <span className="font-medium text-happy-700 dark:text-happy-400">changelog-tools</span> - an npm
                      package that helped me in initial automation processes (mainly changelog parsing, filtering, and
                      multiversion consolidation).
                      <div className="mt-1">
                        <Link
                          href="https://www.npmjs.com/package/changelog-tools"
                          className="text-sm inline-flex items-center text-lavender-600 hover:text-lavender-700 dark:text-lavender-400 dark:hover:text-lavender-300"
                        >
                          <ArrowRight className="mr-1 h-3 w-3" /> View on npm
                        </Link>
                      </div>
                    </li>
                    <li>
                      <span className="font-medium text-happy-700 dark:text-happy-400">Changelog Browser</span> - a
                      mini-project to help people navigate through their changelogs and see clear version differences
                      based on selected version ranges.
                      <div className="mt-1">
                        <Link
                          href="https://rgembalik.gitlab.io/changelog-browser/"
                          className="text-sm inline-flex items-center text-lavender-600 hover:text-lavender-700 dark:text-lavender-400 dark:hover:text-lavender-300"
                        >
                          <ArrowRight className="mr-1 h-3 w-3" /> Try it out
                        </Link>
                      </div>
                    </li>
                    <li>
                      <span className="font-medium text-happy-700 dark:text-happy-400">Happy Changelog Workflow</span> -
                      ready-to-use CI/CD example implementations of the Happy Changelog workflow that you can adapt for
                      your projects.
                      <div className="mt-1 flex flex-wrap gap-2">
                        <Link
                          href="https://github.com/happy-changelog/happy-changelog-workflow"
                          className="text-sm inline-flex items-center text-lavender-600 hover:text-lavender-700 dark:text-lavender-400 dark:hover:text-lavender-300"
                        >
                          <Github className="mr-1 h-3 w-3" /> GitHub Implementation
                        </Link>
                        <span className="text-sm inline-flex items-center text-muted-foreground/60">
                          <Gitlab className="mr-1 h-3 w-3" /> GitLab implementation coming soon
                        </span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    I <span className="text-coral-500 dark:text-coral-400 font-bold">looooooooooooooooooove</span>{" "}
                    automation of boring processes. Processes are for people, not the other way around, so the best
                    process is a seamless one (even if it does a lot underneath the CI/CD mask).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-happy-gradient dark:bg-gradient-to-r dark:from-happy-900 dark:to-lavender-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Zap className="h-12 w-12 text-white mb-4 animate-bounce-slow" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Ready to make your changelog process happier?
                </h2>
                <p className="max-w-[900px] text-white/90 md:text-xl/relaxed">
                  Join the growing community of developers who've eliminated changelog conflicts and streamlined their
                  release process.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Link href="https://github.com/happy-changelog/happy-changelog-workflow">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-happy-700 hover:bg-white/90 dark:bg-white/90 dark:text-happy-700 dark:hover:bg-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Get started today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-gradient-to-r from-happy-50 to-lavender-50 dark:from-happy-900/30 dark:to-lavender-900/30 dark:border-happy-800">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex gap-2 items-center text-lg font-semibold">
            <Sparkles className="h-5 w-5 text-happy-500 dark:text-happy-400" />
            <span className="text-gradient">Happy Changelog</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Happy Changelog is an open workflow framework. Feel free to adapt and implement it in your projects.
          </p>
        </div>
      </footer>
    </div>
  )
}

