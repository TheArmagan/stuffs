// broadcast.js

/**
 * Create a broadcast proxy that forwards calls to multiple target objects.
 * @param {Array<T>} targets - The target objects to broadcast to.
 * @returns {Broadcasted<T>} - A proxy object that forwards calls to all targets.
 */
module.exports = function broadcastProxy(targets) {
  const handler = {
    get(targets, property) {
      const firstTarget = targets[0];

      if (typeof firstTarget[property] === 'function') {
        return (...args) => {
          const results = targets.map(t => t[property](...args));
          return results.some(r => typeof r?.then === "function")
            ? Promise.all(results)
            : results;
        };
      }

      if (typeof firstTarget[property] === 'object' && firstTarget[property] !== null) {
        const newTargets = targets.map(t => t[property]);
        return broadcastProxy(newTargets);
      }

      return targets.map(t => t[property]);
    },

    set(targets, property, value) {
      targets.forEach(t => {
        t[property] = value;
      });
      return true;
    },
  };

  return new Proxy(targets, handler);
}
