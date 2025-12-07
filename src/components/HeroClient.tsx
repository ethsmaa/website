'use client';

import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('./Hero'), {
  ssr: false,
});

export default function HeroClient() {
  return <Hero />;
}

// next jsden nefret ediyorum