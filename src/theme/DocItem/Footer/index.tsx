import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";

//import GiscusComment
import GiscusComment from '@site/src/components/GiscusComment';

import { useDoc } from "@docusaurus/theme-common/internal";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  const { frontMatter } = useDoc();
  const { no_comments } = frontMatter;

  return (
    <>
      <Footer {...props} />
      {!no_comments && (
        <GiscusComment />
      )}
    </>
  );
}
