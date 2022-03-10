import React, { ComponentProps } from 'react';
import type DocItemFooterType from '@theme/DocItemFooter';
import DocItemFooter from '@theme-original/DocItemFooter';

import { DiscussionEmbed } from "disqus-react";

type Props = ComponentProps<typeof DocItemFooterType>

export default function DocItemFooterWrapper(props: Props): JSX.Element {
  const { content: DocContent } = props;
  const { metadata, frontMatter } = DocContent;
  const { no_comments } = frontMatter;
  const { title, slug } = metadata;
  return (
    <>
      <DocItemFooter {...props} />
      {
        (!no_comments && <DiscussionEmbed shortname="ouch1978"
          config={
            {
              identifier: slug,
              title: title,
              language: "zh-TW",
            }
          }
        />
        )
      }
    </>
  );
}
