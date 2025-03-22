import { Check } from "lucide-react";

export function BenefitsSection() {
  return (
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
              Why Use{" "}
              <span className="text-sunny-gradient">Happy Changelog</span>?
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
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-happy-100 dark:bg-happy-900 mt-1">
                  <Check className="h-4 w-4 text-happy-600 dark:text-happy-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-happy-700 dark:text-happy-400">
                    No More Merge Conflicts
                  </h3>
                  <p className="text-muted-foreground">
                    Since changelog entries are added to PR descriptions rather
                    than directly to the CHANGELOG.md file, merge conflicts on
                    the changelog become a thing of the past.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md lavender-card">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lavender-100 dark:bg-lavender-900 mt-1">
                  <Check className="h-4 w-4 text-lavender-600 dark:text-lavender-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-lavender-700 dark:text-lavender-400">
                    Semantic Versioning Compliance
                  </h3>
                  <p className="text-muted-foreground">
                    By specifying the change level (major/minor/patch) in the PR
                    description, the framework automatically determines the
                    correct version bump according to semver principles.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md sunny-card">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sunny-100 dark:bg-sunny-900 mt-1">
                  <Check className="h-4 w-4 text-sunny-600 dark:text-sunny-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sunny-700 dark:text-sunny-400">
                    Consistent Format
                  </h3>
                  <p className="text-muted-foreground">
                    Follows the widely-adopted Keep a Changelog format, ensuring
                    consistency across all entries and making changelogs more
                    readable for users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md coral-card">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coral-100 dark:bg-coral-900 mt-1">
                  <Check className="h-4 w-4 text-coral-600 dark:text-coral-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-coral-700 dark:text-coral-400">
                    Context-Rich Entries
                  </h3>
                  <p className="text-muted-foreground">
                    PR descriptions typically contain more context than commit
                    messages, resulting in more meaningful and useful changelog
                    entries that better explain the changes to users.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md happy-card">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-happy-100 dark:bg-happy-900 mt-1">
                  <Check className="h-4 w-4 text-happy-600 dark:text-happy-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-happy-700 dark:text-happy-400">
                    Automated Release Notes
                  </h3>
                  <p className="text-muted-foreground">
                    Generate comprehensive release notes for GitHub or GitLab
                    releases automatically, saving time and ensuring consistency
                    between your changelog and release notes.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-2 p-6 rounded-lg border bg-white dark:bg-card shadow-md lavender-card">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lavender-100 dark:bg-lavender-900 mt-1">
                  <Check className="h-4 w-4 text-lavender-600 dark:text-lavender-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-lavender-700 dark:text-lavender-400">
                    Framework Agnostic
                  </h3>
                  <p className="text-muted-foreground">
                    Works with any programming language or framework. The
                    workflow principles can be implemented in any CI/CD system
                    and version control platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
