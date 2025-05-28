//! horology-core.js
//! version: 0.0.1
//! authors: Paul Schifferer
//! license: MIT
//! horology.pilgrimagesoftware.com

import { hooks as horology } from './lib/utils/hooks';

import { adjust } from './lib/adjust';
import { compare } from './lib/compare';
import { convert } from './lib/convert';

horology.adjust = adjust;
horology.compare = compare;
horology.convert = convert;

export default horology;
