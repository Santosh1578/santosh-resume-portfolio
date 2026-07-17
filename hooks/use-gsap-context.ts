"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";
import gsap from "gsap";

export function useGsapContext<T extends HTMLElement>(
  scope: RefObject<T | null>
) {
  const contextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!scope.current) return;

    contextRef.current = gsap.context(() => {}, scope);

    return () => {
      contextRef.current?.revert();
    };
  }, [scope]);

  return contextRef;
}
