import Image from "next/image";

/**
 * Full-bleed photo behind a page hero. A real <img> (not a CSS background) so
 * search engines index it and screen readers get the alt text.
 */
export function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      priority
      className="object-cover"
    />
  );
}
