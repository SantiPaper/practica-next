import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="w-4/5 bg-gray-900 min-h-screen">{children}</div>;
};
