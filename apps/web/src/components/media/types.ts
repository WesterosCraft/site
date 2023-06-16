import type { ElementType, Ref } from "react";
// import type { StaticImageData } from 'next/image'

import type { Media as MediaType } from "@lib/payload-types";

export interface Props {
  src?: string; // for static media
  alt?: string;
  resource?: MediaType; // for Payload media
  sizes?: string; // for NextImage only
  priority?: boolean; // for NextImage only
  fill?: boolean; // for NextImage only
  className?: string;
  imgClassName?: string;
  videoClassName?: string;
  htmlElement?: ElementType | null;
  onClick?: () => void;
  onLoad?: () => void;
  ref?: Ref<null | HTMLImageElement | HTMLVideoElement>;
  width?: number;
  height?: number;
}
