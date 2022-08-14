import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";

import { DiscussionEmbed } from "disqus-react";
import { useDoc } from "@docusaurus/theme-common/internal";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { metadata, frontMatter, assets } = useDoc();
  const { no_comments } = frontMatter;
  const { title, slug } = metadata;
  return (
    <>
      <Footer {...props} />
      {!no_comments && (
        <DiscussionEmbed
          shortname="ouch1978"
          config={{
            identifier: slug,
            title: title,
            language: "zh-TW",
          }}
        />
      )}
    </>
  );
}
