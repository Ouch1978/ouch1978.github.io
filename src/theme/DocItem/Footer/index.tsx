import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';

//import GiscusComment
import GiscusComment from '@site/src/components/GiscusComment';

import { useDoc } from "@docusaurus/plugin-content-docs/client";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />

      <GiscusComment />
    </>
  );
}
