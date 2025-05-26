//! horology-core.js
//! version: 0.0.1
//! authors: Paul Schifferer
//! license: MIT
//! horology.pilgrimagesoftware.com

import { hooks as horology } from './lib/utils/hooks';

import { adjust } from './lib/adjust';

horology.adjust = adjust;

export default horology;
