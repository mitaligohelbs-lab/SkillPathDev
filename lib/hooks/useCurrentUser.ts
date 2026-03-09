"use client";

import { useUser } from "@clerk/nextjs";

export const useCurrentUser = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  return {
    userId: user?.id ?? null,
    fullName: user?.fullName ?? "",
    isLoaded,
    isSignedIn,
  };
};
