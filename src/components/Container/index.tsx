import { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-4/5 min-h-screen flex flex-col items-center bg-slate-400">
      {children}
    </div>
  );
};
