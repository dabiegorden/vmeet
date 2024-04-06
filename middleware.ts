import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/recordings",
    "/previous",
    "/personal-room",
    "/meeting",
    "/upcoming",
  ],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
