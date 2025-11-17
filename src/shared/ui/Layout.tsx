import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="sm:mx-2 md:mx-7 lg:mx-9 xl:mx-60">{children}</div>;
}
