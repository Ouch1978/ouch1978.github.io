import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComment() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="Ouch1978/ouch1978.github.io"
            repoId="R_kgDOG-7JAg"
            category="Announcements"
            categoryId="DIC_kwDOG-7JAs4Cbsvt"
            mapping="title"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={colorMode}
            lang="zh-TW"
            loading="lazy"
            crossorigin="anonymous"
            async
        />
    );
}