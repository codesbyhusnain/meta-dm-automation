import React from "react";
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Loader2Icon, User } from "lucide-react";
import Loader from "../loader";
import { Button } from "@/components/ui/button";

type Props = {};

const ClerkAuthState = (props: Props) => {
  return (
    <>
      <ClerkLoading>
        <Loader2Icon className="h-4 w-4 animate-spin text-zinc-300 mt-1" />
      </ClerkLoading>
      <SignedOut>
        <SignInButton>
          <Button
            className="rounded-xl
          bg-[#252525]
          text-white
          hover:bg-[#252525]/70
          "
          >
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.UserProfileLink
            label="Dashboard"
            url={`/dashboard`}
            labelIcon={<User size={16} />}
          />
        </UserButton>
      </SignedIn>
    </>
  );
};

export default ClerkAuthState;
