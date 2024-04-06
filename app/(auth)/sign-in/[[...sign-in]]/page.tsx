import { SignIn } from "@clerk/nextjs";

export default function SignedIn() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignIn />
    </main>
  );
}
