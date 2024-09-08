// Utility type for broadcasting
export type Broadcasted<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R
  ? (...args: A) => R extends Promise<infer U> ? Promise<U[]> : R[]
  : T[K] extends object
  ? Broadcasted<T[K]>
  : T[K][];
};

// Function to create a broadcast proxy
declare function broadcastProxy<T>(targets: T[]): Broadcasted<T>;
export = broadcastProxy;
