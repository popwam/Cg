// /developer/[slug]/layout.tsx
import type { ReactNode } from "react";
import { generateMetadata } from "./metadata";

export { generateMetadata };

export default function DeveloperLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
