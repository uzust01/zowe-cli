#!/usr/bin/env node
/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/


import { IImperativeConfig, Imperative } from "@brightside/imperative";
import { Constants } from "./Constants";
import { inspect } from "util";
import { PerfTiming } from "@zowe/perf-timing";

// TODO(Kelosky): if we remove this, imperative fails to find config in package.json & we must debug this.
const config: IImperativeConfig = {
    configurationModule: __dirname + "/imperative"
};

(async () => {
    try {
        PerfTiming.getApi().mark("start");
        await Imperative.init(config);
        PerfTiming.getApi().mark("end");
        PerfTiming.getApi().measure("start to end", "start", "end");

        Imperative.api.appLogger.trace("Init was successful");
        Imperative.parse();
    }
    catch (initErr) {
        Imperative.console.fatal("Error initializing " + Constants.DISPLAY_NAME +
            ":\n "
            + inspect(initErr));
    }
})();
