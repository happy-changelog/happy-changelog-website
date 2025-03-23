import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-happy-50 dark:from-background dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <span className="text-gradient">Happy Changelog</span>
              </h1>
              <p className="text-xl text-lavender-700 dark:text-lavender-300 font-medium">
                An open workflow framework for managing changelogs through pull
                request descriptions
              </p>
              <p className="max-w-[600px] text-muted-foreground mt-4">
                Happy Changelog is a free, open workflow framework that
                eliminates changelog conflicts by moving changelog entries to PR
                descriptions. It{" "}
                <span className="font-medium text-happy-600 dark:text-happy-400">
                  promotes intelligent sorting and merging
                </span>{" "}
                of entries by change type across multiple PRs and versions,
                enabling automated version bumping and release notes generation
                based on semantic versioning principles.
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
                <h3 className="text-xl font-semibold text-happy-700 dark:text-happy-400">
                  The Problem
                </h3>
                <p className="text-muted-foreground">
                  Traditional changelog management leads to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Frequent merge conflicts in CHANGELOG.md</li>
                  <li>Inconsistent formatting across entries</li>
                  <li>Manual version bumping prone to errors</li>
                  <li>Disconnected release notes</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-happy-700 dark:text-happy-400">
                  The Solution
                </h3>
                <p className="text-muted-foreground">
                  Happy Changelog moves entries to PR descriptions and automates
                  the rest:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>Zero changelog merge conflicts</li>
                  <li>Consistent entry format</li>
                  <li>
                    <span className="font-medium text-happy-600 dark:text-happy-400">
                      Enables smart sorting and merging
                    </span>{" "}
                    of entries by change&nbsp;type
                  </li>
                  <li>Automated semantic versioning</li>
                  <li>Integrated release notes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
