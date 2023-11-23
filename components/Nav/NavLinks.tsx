import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface NavLinksProps {
  colDirection?: boolean;
}
export default function NavLinks({ colDirection }: NavLinksProps) {
  const navLinksClasess = clsx("flex gap-3", {
    "flex-col text-xs": colDirection,
  });
  return (
    <div className={navLinksClasess}>
      <Link href={`/`}>How it works</Link>
      <Link href={`/`}>Packages</Link>
      <Link href={`/`}>Success stories</Link>
      <Link href={`/`}>About rapcult</Link>
      <Link href={`/`}>join rapcult</Link>
    </div>
  );
}
