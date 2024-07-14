import { useContext } from "react";

export default function useCustomContext(contextName) {
  const context = useContext(contextName);
  if (context === undefined) {
    throw new Error(`${contextName} accessed outsider of provider`);
  }
  return context;
}
