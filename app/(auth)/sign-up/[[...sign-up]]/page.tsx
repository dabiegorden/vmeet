import { SignUp } from "@clerk/nextjs";

export default function SignedUp() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
}
