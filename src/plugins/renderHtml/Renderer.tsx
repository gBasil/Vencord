/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { useMemo } from "@webpack/common";
import DOMPurify from "dompurify";

type Props = {
    content: string;
};

function Renderer(props: Props) {
    const content = useMemo(() => {
        return DOMPurify.sanitize(props.content);
    }, [props.content]);

    return <div className="vc-renderHtml" dangerouslySetInnerHTML={{ __html: content }}></div>;
}

export default function render(content: string) {
    return <Renderer content={content} />;
}
