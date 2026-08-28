import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-base flex">
      <div className="hidden lg:flex flex-col justify-center px-16 w-[480px] shrink-0 border-r border-surface-border">
        <div className="mb-12">
          <span className="text-xl font-semibold text-copy-primary tracking-tight">
            Omega AI
          </span>
          <p className="mt-2 text-copy-muted text-sm">
            Real-time collaborative system design
          </p>
        </div>

        <ul className="space-y-3">
          {[
            "Describe a system in plain English",
            "AI maps it onto a shared canvas",
            "Collaborate and refine the architecture",
            "Generate a Markdown technical spec",
          ].map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-copy-secondary">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-1 items-center justify-center p-8">
        <SignIn />
      </div>
    </div>
  );
}
