/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "./style.css";

import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

import render from "./Renderer";

export default definePlugin({
    name: "RenderHtml",
    description: "Render codeblocks as HTML (safely); just use the \"html-\" language",
    authors: [Devs.Basil],

    patches: [
        {
            find: "codeBlock:{react(",
            replacement: {
                match: /codeBlock:\{react\((\i),(\i),(\i)\)\{/,
                replace: "$& if ($1.lang === 'html-') {return $self.renderHtml($1,$2,$3);}"
            }
        },
    ],
    renderHtml: ({ content }: { content: string; }) => {
        return render(content);
    },
});
