import React from "react";
import { CustomRenderers, Serialize } from "./serialize";

export const RichText: React.FC<{
  className?: string;
  content: any;
  customRenderers?: CustomRenderers;
}> = ({ content, customRenderers }) => {
  if (!content) {
    return null;
  }

  return (
    <div>
      <Serialize content={content} customRenderers={customRenderers} />
    </div>
  );
};
