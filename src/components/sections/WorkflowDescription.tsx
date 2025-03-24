import { ArrowDown, GitMerge, GitPullRequest, Package } from "lucide-react";

export function WorkflowDescription() {
  return (
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
              The <span className="text-gradient">Happy Changelog</span>{" "}
              Workflow
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A simple, three-step process that integrates with your existing
              development workflow
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-md happy-card transform transition-transform hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lavender-100 dark:bg-lavender-900">
              <GitPullRequest className="h-6 w-6 text-lavender-600 dark:text-lavender-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-lavender-700 dark:text-lavender-300">
                1. Document in PR
              </h3>
              <p className="text-muted-foreground">
                Add a &quot;Changelog&quot; section to your pull request
                description with appropriate change categories (Added, Changed,
                Fixed, etc.) and indicate the change level (major/minor/patch).
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-md sunny-card transform transition-transform hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunny-100 dark:bg-sunny-900">
              <GitMerge className="h-6 w-6 text-sunny-600 dark:text-sunny-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-sunny-700 dark:text-sunny-300">
                2. Merge & Automate
              </h3>
              <p className="text-muted-foreground">
                When merged, a CI/CD process extracts the changelog entries,
                updates the CHANGELOG.md file, and bumps the version in
                package.json based on the highest change level.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-md coral-card transform transition-transform hover:scale-105">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 dark:bg-coral-900">
              <Package className="h-6 w-6 text-coral-600 dark:text-coral-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-coral-700 dark:text-coral-300">
                3. Release
              </h3>
              <p className="text-muted-foreground">
                Create GitHub or GitLab releases with a single command, which
                automatically compiles all changes since the last release into
                structured release notes.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-8">
          <div className="rounded-lg border bg-card p-8 shadow-md lavender-card">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-lavender-700 dark:text-lavender-300">
                  Example PR Description Formats
                </h3>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <h4 className="font-medium text-lavender-600 dark:text-lavender-400">
                      Format 1: Details Element
                    </h4>
                    <div className="rounded-md bg-lavender-50 dark:bg-lavender-900/50 p-4 font-mono text-sm border border-lavender-200 dark:border-lavender-800">
                      <p className="mb-2 font-semibold text-lavender-800 dark:text-lavender-200">
                        &lt;details&gt;
                      </p>
                      <p className="mb-2 font-semibold text-lavender-800 dark:text-lavender-200">
                        &lt;summary&gt;Changelog: minor&lt;/summary&gt;
                      </p>
                      <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">
                        ### Added
                      </p>
                      <p className="mb-2 text-lavender-900 dark:text-lavender-100">
                        - Dark mode support to the dashboard
                      </p>
                      <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">
                        ### Fixed
                      </p>
                      <p className="mb-1 text-lavender-900 dark:text-lavender-100">
                        - Alignment issues in mobile navigation
                      </p>
                      <p className="text-lavender-900 dark:text-lavender-100">
                        - Documentation for API endpoints
                      </p>
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
                      <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">
                        ### Added
                      </p>
                      <p className="mb-2 text-lavender-900 dark:text-lavender-100">
                        - Dark mode support to the dashboard
                      </p>
                      <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">
                        ### Fixed
                      </p>
                      <p className="mb-1 text-lavender-900 dark:text-lavender-100">
                        - Alignment issues in mobile navigation
                      </p>
                      <p className="text-lavender-900 dark:text-lavender-100">
                        - Documentation for API endpoints
                      </p>
                      <p className="mt-2 font-semibold text-lavender-800 dark:text-lavender-200">
                        /-changelog
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-lavender-600 dark:text-lavender-400">
                      Format 3: Markdown Syntax
                    </h4>
                    <div className="rounded-md bg-lavender-50 dark:bg-lavender-900/50 p-4 font-mono text-sm border border-lavender-200 dark:border-lavender-800">
                      <p className="mb-2 font-semibold text-lavender-800 dark:text-lavender-200">
                        ## Changelog minor
                      </p>
                      <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">
                        ### Added
                      </p>
                      <p className="mb-2 text-lavender-900 dark:text-lavender-100">
                        - Dark mode support to the dashboard
                      </p>
                      <p className="mb-2 font-semibold text-lavender-700 dark:text-lavender-300">
                        ### Fixed
                      </p>
                      <p className="mb-1 text-lavender-900 dark:text-lavender-100">
                        - Alignment issues in mobile navigation
                      </p>
                      <p className="text-lavender-900 dark:text-lavender-100">
                        - Documentation for API endpoints
                      </p>
                      <p className="mt-2 font-semibold text-lavender-800 dark:text-lavender-200">
                        ---
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowDown className="h-6 w-6 text-happy-500 dark:text-happy-400 animate-bounce-slow" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-happy-700 dark:text-happy-400">
                  Generated Changelog Entry
                </h3>
                <div className="rounded-md bg-happy-50 dark:bg-happy-900/50 p-4 font-mono text-sm border border-happy-200 dark:border-happy-800">
                  <p className="mb-2 font-semibold text-happy-800 dark:text-happy-200">
                    ## v1.2.0
                  </p>
                  <p className="mb-2 font-semibold text-happy-700 dark:text-happy-300">
                    ### Added
                  </p>
                  <p className="mb-2 text-happy-900 dark:text-happy-100">
                    - Dark mode support to the dashboard
                  </p>
                  <p className="mb-2 font-semibold text-happy-700 dark:text-happy-300">
                    ### Fixed
                  </p>
                  <p className="mb-1 text-happy-900 dark:text-happy-100">
                    - Alignment issues in mobile navigation
                  </p>
                  <p className="text-happy-900 dark:text-happy-100">
                    - Documentation for API endpoints
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
