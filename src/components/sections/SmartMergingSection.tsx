import { ArrowDown, GitMerge, GitPullRequest, Package } from "lucide-react";

export function SmartMergingSection() {
  return (
    <div className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <span className="inline-block rounded-full bg-happy-100 dark:bg-happy-900 px-3 py-1 text-sm text-happy-800 dark:text-happy-200 mb-2">
              Smart Organization
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Beyond Simple <span className="text-gradient">Concatenation</span>
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Happy Changelog promotes intelligent sorting and merging of
              entries by change type
            </p>
          </div>
        </div>

        {/* PR to Version Visualization */}
        <div className="mx-auto max-w-5xl">
          <h3 className="text-xl font-bold text-center mb-6 text-happy-700 dark:text-happy-400">
            Multiple PRs → Single Version
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* PR 1 */}
            <div className="rounded-lg border bg-card p-4 shadow-md lavender-card">
              <div className="flex items-center gap-2 mb-3">
                <GitPullRequest className="h-5 w-5 text-lavender-600 dark:text-lavender-300" />
                <h4 className="font-semibold text-lavender-700 dark:text-lavender-300">
                  PR #123
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-lavender-700 dark:text-lavender-400">
                  ### Added
                </p>
                <p className="text-muted-foreground">- Dark mode support</p>
                <p className="font-medium text-lavender-700 dark:text-lavender-400">
                  ### Fixed
                </p>
                <p className="text-muted-foreground">- Button alignment</p>
              </div>
            </div>

            {/* PR 2 */}
            <div className="rounded-lg border bg-card p-4 shadow-md coral-card">
              <div className="flex items-center gap-2 mb-3">
                <GitPullRequest className="h-5 w-5 text-coral-600 dark:text-coral-300" />
                <h4 className="font-semibold text-coral-700 dark:text-coral-300">
                  PR #124
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-coral-700 dark:text-coral-400">
                  ### Changed
                </p>
                <p className="text-muted-foreground">- Updated API endpoints</p>
                <p className="font-medium text-coral-700 dark:text-coral-400">
                  ### Fixed
                </p>
                <p className="text-muted-foreground">- Login error handling</p>
              </div>
            </div>

            {/* PR 3 */}
            <div className="rounded-lg border bg-card p-4 shadow-md sunny-card">
              <div className="flex items-center gap-2 mb-3">
                <GitPullRequest className="h-5 w-5 text-sunny-600 dark:text-sunny-300" />
                <h4 className="font-semibold text-sunny-700 dark:text-sunny-300">
                  PR #125
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-sunny-700 dark:text-sunny-400">
                  ### Added
                </p>
                <p className="text-muted-foreground">- Export to CSV feature</p>
                <p className="font-medium text-sunny-700 dark:text-sunny-400">
                  ### Deprecated
                </p>
                <p className="text-muted-foreground">- Legacy export format</p>
              </div>
            </div>
          </div>

          {/* Merge Arrow */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center">
              <GitMerge className="h-8 w-8 text-happy-500 dark:text-happy-400 mb-2" />
              <ArrowDown className="h-8 w-8 text-happy-500 dark:text-happy-400 animate-bounce-slow" />
              <p className="text-sm text-muted-foreground mt-1">
                Intelligent Sorting & Organization
              </p>
            </div>
          </div>

          {/* Merged Version */}
          <div className="rounded-lg border bg-card p-6 shadow-md happy-card mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-6 w-6 text-happy-600 dark:text-happy-300" />
              <h4 className="font-semibold text-happy-700 dark:text-happy-300">
                Version 1.2.0
              </h4>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-happy-700 dark:text-happy-400">
                  ### Added
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Dark mode support</li>
                  <li>Export to CSV feature</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-happy-700 dark:text-happy-400">
                  ### Changed
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Updated API endpoints</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-happy-700 dark:text-happy-400">
                  ### Fixed
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Button alignment</li>
                  <li>Login error handling</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-happy-700 dark:text-happy-400">
                  ### Deprecated
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Legacy export format</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Multiple Versions to Release */}
          <h3 className="text-xl font-bold text-center mb-6 text-happy-700 dark:text-happy-400">
            Multiple Versions → Single Release
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Version 1 */}
            <div className="rounded-lg border bg-card p-4 shadow-md lavender-card">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-lavender-600 dark:text-lavender-300" />
                <h4 className="font-semibold text-lavender-700 dark:text-lavender-300">
                  Version 1.1.0
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-lavender-700 dark:text-lavender-400">
                  ### Added
                </p>
                <p className="text-muted-foreground">- User profiles</p>
                <p className="font-medium text-lavender-700 dark:text-lavender-400">
                  ### Fixed
                </p>
                <p className="text-muted-foreground">- Search functionality</p>
              </div>
            </div>

            {/* Version 2 */}
            <div className="rounded-lg border bg-card p-4 shadow-md happy-card">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-happy-600 dark:text-happy-300" />
                <h4 className="font-semibold text-happy-700 dark:text-happy-300">
                  Version 1.2.0
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-happy-700 dark:text-happy-400">
                  ### Added
                </p>
                <p className="text-muted-foreground">- Dark mode support</p>
                <p className="text-muted-foreground">- Export to CSV feature</p>
                <p className="font-medium text-happy-700 dark:text-happy-400">
                  ### Fixed
                </p>
                <p className="text-muted-foreground">- Button alignment</p>
              </div>
            </div>

            {/* Version 3 */}
            <div className="rounded-lg border bg-card p-4 shadow-md coral-card">
              <div className="flex items-center gap-2 mb-3">
                <Package className="h-5 w-5 text-coral-600 dark:text-coral-300" />
                <h4 className="font-semibold text-coral-700 dark:text-coral-300">
                  Version 1.2.1
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-coral-700 dark:text-coral-400">
                  ### Fixed
                </p>
                <p className="text-muted-foreground">- Dark mode toggle</p>
                <p className="font-medium text-coral-700 dark:text-coral-400">
                  ### Security
                </p>
                <p className="text-muted-foreground">- Updated dependencies</p>
              </div>
            </div>
          </div>

          {/* Merge Arrow */}
          <div className="flex justify-center mb-6">
            <div className="flex flex-col items-center">
              <GitMerge className="h-8 w-8 text-happy-500 dark:text-happy-400 mb-2" />
              <ArrowDown className="h-8 w-8 text-happy-500 dark:text-happy-400 animate-bounce-slow" />
              <p className="text-sm text-muted-foreground mt-1">
                Structured Release Notes
              </p>
            </div>
          </div>

          {/* Release */}
          <div className="rounded-lg border bg-card p-6 shadow-md sunny-card">
            <div className="flex items-center gap-2 mb-4">
              <Package className="h-6 w-6 text-sunny-600 dark:text-sunny-300" />
              <h4 className="font-semibold text-sunny-700 dark:text-sunny-300">
                Release v1.2.1
              </h4>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sunny-700 dark:text-sunny-400">
                  ### Added
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    User profiles{" "}
                    <span className="text-xs text-muted-foreground">
                      (v1.1.0)
                    </span>
                  </li>
                  <li>
                    Dark mode support{" "}
                    <span className="text-xs text-muted-foreground">
                      (v1.2.0)
                    </span>
                  </li>
                  <li>
                    Export to CSV feature{" "}
                    <span className="text-xs text-muted-foreground">
                      (v1.2.0)
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sunny-700 dark:text-sunny-400">
                  ### Fixed
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    Search functionality{" "}
                    <span className="text-xs text-muted-foreground">
                      (v1.1.0)
                    </span>
                  </li>
                  <li>
                    Button alignment{" "}
                    <span className="text-xs text-muted-foreground">
                      (v1.2.0)
                    </span>
                  </li>
                  <li>
                    Dark mode toggle{" "}
                    <span className="text-xs text-muted-foreground">
                      (v1.2.1)
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-sunny-700 dark:text-sunny-400">
                  ### Security
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>
                    Updated dependencies{" "}
                    <span className="text-xs text-muted-foreground">
                      (v1.2.1)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
