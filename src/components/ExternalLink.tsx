import React from "react";

export interface ExternalLinkProps {
  linkAddress: string;
  linkText: string;
}

/**
 * A link to an external website. Ensures anchor has "noopener noreferrer" set for a more secure link.
 *
 * @param {string} linkAddress - url of website
 * @param {string} linkText - text to show in link
 * @returns {ReactElement}
 */
export const ExternalLink = ({ linkAddress, linkText }: ExternalLinkProps) => (
  <a href={linkAddress} target="_blank" rel="noopener noreferrer">
    {linkText}
  </a>
);
ExternalLink.displayName = "ExternalLink";
