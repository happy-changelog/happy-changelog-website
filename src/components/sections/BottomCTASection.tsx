import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

import Github from "@/logos/GitHub";

import { Button } from "@/components/ui/button";

export function BottomCTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-happy-gradient dark:bg-gradient-to-r dark:from-happy-900 dark:to-lavender-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
              <Zap className="h-12 w-12 text-white mr-4 animate-bounce-slow inline-block" />
              <span>Ready to make your changelog process happier?</span>
            </h2>
            <p className="max-w-[900px] text-white/90 md:text-xl/relaxed">
              Join the growing community of developers who&apos;ve eliminated
              changelog conflicts and streamlined their release process.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Link href="https://github.com/happy-changelog/happy-changelog-workflow">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-happy-700 hover:bg-white/90 dark:bg-white/90 dark:text-happy-700 dark:hover:bg-white"
              >
                <Github className="mr-2 h-4 w-4 invert" />
                Get started today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
