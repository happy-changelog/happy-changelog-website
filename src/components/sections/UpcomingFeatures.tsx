import { Check, GitBranch, Rocket } from "lucide-react";
import Link from "next/link";

import Github from "@/logos/GitHub";
import GitLab from "@/logos/Gitlab";

import { implementations } from "@/lib/consts";

import { Button } from "../ui/button";

export function UpcomingFeatures() {
  return (
    <section
      id="future"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-sunny-50 dark:from-background dark:to-background"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <span className="inline-block rounded-full bg-sunny-100 dark:bg-sunny-900 px-3 py-1 text-sm text-sunny-800 dark:text-sunny-200 mb-2">
              Looking Forward
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              The <span className="text-sunny-gradient">Future</span> of Happy
              Changelog
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Expanding the workflow to handle more complex development
              scenarios
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg border bg-white dark:bg-card p-8 shadow-md sunny-card">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sunny-100 dark:bg-sunny-900">
                  <Rocket className="h-5 w-5 text-sunny-600 dark:text-sunny-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-sunny-700 dark:text-sunny-400">
                    Roadmap
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    The Happy Changelog project is continuously evolving. Here
                    are some of the key features and improvements planned for
                    future releases:
                  </p>
                </div>
              </div>

              <div className="ml-14 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center shrink-0 justify-center rounded-full bg-sunny-100 dark:bg-sunny-900 mt-1">
                      <GitBranch className="h-4 w-4 text-sunny-600 dark:text-sunny-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-sunny-700 dark:text-sunny-400">
                        Prerelease Support
                      </h4>
                      <p className="text-muted-foreground">
                        A major goal is to enhance the automated pipelines to
                        include prerelease versions. This will allow tracking of
                        changes across alpha, beta, and release candidate
                        versions, which will then be automatically compacted
                        into a single changelog entry upon final release.
                      </p>
                      <div className="mt-3 rounded-md bg-sunny-50 dark:bg-sunny-900/30 p-4 border border-sunny-200 dark:border-sunny-800">
                        <p className="text-sm text-sunny-800 dark:text-sunny-200 font-medium">
                          Example workflow:
                        </p>
                        <ol className="mt-2 list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>
                            Changes are documented in PRs targeting a prerelease
                            branch
                          </li>
                          <li>
                            Prerelease versions (1.2.0-beta.1, 1.2.0-beta.2,
                            etc.) are generated with their own changelog entries
                          </li>
                          <li>
                            Upon final release, all prerelease changelog entries
                            are intelligently merged into a single,
                            comprehensive entry for version 1.2.0
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-coral-100 dark:bg-coral-900 mt-1">
                      <Check className="h-4 w-4 text-coral-600 dark:text-coral-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-coral-700 dark:text-coral-400">
                        Enhanced Tooling
                      </h4>
                      <p className="text-muted-foreground">
                        Future updates to the changelog-tools package will
                        include more powerful features. Some will include better
                        handling of Markdown source (probably with marked
                        parser) and improved support for various CI/CD
                        platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-sunny-100 dark:border-sunny-800">
                <p className="text-center text-muted-foreground">
                  Happy Changelog is an open project, and contributions are
                  welcome! If you have ideas for improvements or would like to
                  help implement these features, please visit the GitHub
                  repository.
                </p>
                <p>
                  Feel free to open issues or submit pull requests. Your
                  feedback and contributions are invaluable!
                </p>
                <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
                  <Link href={implementations.GitHub}>
                    <Button
                      variant="outline"
                      className="border-sunny-300 dark:border-sunny-700 hover:bg-sunny-50 dark:hover:bg-sunny-900/50"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Contribute to the project
                    </Button>
                  </Link>
                  <Link href={implementations.GitLab}>
                    <Button
                      variant="outline"
                      className="border-lavender-300 dark:border-lavender-700 hover:bg-lavender-50 dark:hover:bg-lavender-900/50"
                    >
                      <GitLab className="mr-2 h-4 w-4" />
                      Contribute to CI component
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
