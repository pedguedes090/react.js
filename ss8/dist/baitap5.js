"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findFirstEven = (arr, predicate) => arr.find(item => item % 2 === 0 && predicate(item));
