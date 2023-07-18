"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#0000ff"
        options={{ showSpinner: true }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default Providers;
