//! horology-core.js
//! version: 0.0.x
//! authors: Paul Schifferer
//! license: MIT
//! horology.pilgrimagesoftware.com

import { adjust } from './lib/adjust';
import { compare } from './lib/compare';
import { convert } from './lib/convert';

export const horology = Object.create({
    adjust,
    compare,
    convert,
});

horology.adjust = adjust;
horology.compare = compare;
horology.convert = convert;
