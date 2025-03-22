import Github from "@/logos/GitHub";
import GitLab from "@/logos/Gitlab";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PersonalSection() {
  return (
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
                &quot;I grew tired of resolving conflicts in changelogs. I never
                liked formalized commit messages in PRs. So I decided to create
                something better.&quot;
              </p>
              <p className="text-muted-foreground">
                My journey with changelog management started with frustration
                and ended with automation. Along the way, I created:
              </p>
              <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                <li>
                  <span className="font-medium text-happy-700 dark:text-happy-400">
                    changelog-tools
                  </span>{" "}
                  - an npm package that helped me in initial automation
                  processes (mainly changelog parsing, filtering, and
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
                  <span className="font-medium text-happy-700 dark:text-happy-400">
                    Changelog Browser
                  </span>{" "}
                  - a mini-project to help people navigate through their
                  changelogs and see clear version differences based on selected
                  version ranges.
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
                  <span className="font-medium text-happy-700 dark:text-happy-400">
                    Happy Changelog Workflow
                  </span>{" "}
                  - ready-to-use CI/CD example implementations of the Happy
                  Changelog workflow that you can adapt for your projects.
                  <div className="mt-1 flex flex-wrap gap-2">
                    <Link
                      href="https://github.com/happy-changelog/happy-changelog-workflow"
                      className="text-sm inline-flex items-center text-lavender-600 hover:text-lavender-700 dark:text-lavender-400 dark:hover:text-lavender-300"
                    >
                      <Github className="mr-1 h-3 w-3" /> GitHub Implementation
                    </Link>
                    <span className="text-sm inline-flex items-center text-muted-foreground/60">
                      <GitLab className="mr-1 h-3 w-3" /> GitLab implementation
                      coming soon
                    </span>
                  </div>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                I{" "}
                <span className="text-coral-500 dark:text-coral-400 font-bold">
                  looooooooooooooooooove
                </span>{" "}
                automation of boring processes. Processes are for people, not
                the other way around, so the best process is a seamless one
                (even if it does a lot underneath the CI/CD mask).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
