import type { Atom } from 'jotai/vanilla';
export declare function unwrap<Value>(anAtom: Atom<Promise<Value>>): Atom<Awaited<Value> | undefined>;
export declare function unwrap<Value, PendingValue>(anAtom: Atom<Promise<Value>>, fallback: (prev?: Value) => PendingValue): Atom<Awaited<Value> | PendingValue>;
