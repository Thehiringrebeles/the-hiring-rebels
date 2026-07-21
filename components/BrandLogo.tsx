import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  variant?: "full" | "mark";
  priority?: boolean;
};

export function BrandLogo({ className = "", variant = "full", priority = false }: BrandLogoProps) {
  const src = "/logo/logo.svg";
  const width = variant === "mark" ? 56 : 240;
  const height = variant === "mark" ? 56 : 58;

  return (
    <Image
      src={src}
      alt="The Hiring Rebels"
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes="(max-width: 768px) 160px, 220px"
    />
  );
}

export default BrandLogo;
