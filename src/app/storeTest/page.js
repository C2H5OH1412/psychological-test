'use client';

import { useState } from 'react';
import { useBearStore } from '../store/store';

export default function StoreTest() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  

  return (
    <div className="max-w-2xl mx-auto p-6">
      Bears: {bears}
      <button onClick={increasePopulation}>Increase Population</button>
      <button onClick={removeAllBears}>Remove All Bears</button>
    </div>
  );
}
