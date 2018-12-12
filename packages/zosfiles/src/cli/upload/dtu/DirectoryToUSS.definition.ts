/*
* This program and the accompanying materials are made available under the terms of the *
* Eclipse Public License v2.0 which accompanies this distribution, and is available at *
* https://www.eclipse.org/legal/epl-v20.html                                      *
*                                                                                 *
* SPDX-License-Identifier: EPL-2.0                                                *
*                                                                                 *
* Copyright Contributors to the Zowe Project.                                     *
*                                                                                 *
*/

import * as path from "path";
import { ICommandDefinition } from "@brightside/imperative";
import { UploadOptions } from "../Upload.options";

import i18nTypings from "../../-strings-/en";

// Does not use the import in anticipation of some internationalization work to be done later.
const strings = (require("../../-strings-/en").default as typeof i18nTypings).UPLOAD.ACTIONS.DIRECTORY_TO_USS;

/**
 * Upload file-to-uss command definition containing its description, examples and/or options
 * @type {ICommandDefinition}
 */
export const DirectoryToUSSDefinition: ICommandDefinition = {
    name: "directory-to-uss",
    aliases: ["dtu"],
    description: strings.DESCRIPTION,
    type: "command",
    handler: path.join(__dirname, "/DirectoryToUSS.handler"),
    profile: {
        required: ["zosmf"],
    },
    positionals: [
        {
            name: "inputpath",
            description: strings.POSITIONALS.INPUTDIR,
            type: "string",
            required: true
        },
        {
            name: "ussbase",
            description: strings.POSITIONALS.USSDIR,
            type: "string",
            required: true
        },
    ],
    options: [
        UploadOptions.binary
    ],
    examples: [
        {
            description: strings.EXAMPLES.EX1,
            options: `"a/local/folder "/a/ibmuser"`
        }
    ]
};
