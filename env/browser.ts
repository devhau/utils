/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */
import * as utils from './../src/index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Object.entries(utils).forEach(([utilName, util]) => {
  (window as any)[utilName] = util
});
