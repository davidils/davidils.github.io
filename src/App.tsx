'use client';
import { WavyBackground } from './components/ui/wavy-background';

export default function WavyBackgroundDemo() {
  return (
    <WavyBackground className="max-w-4xl mx-auto">
      <p className="text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center">
        David Ils
      </p>
      <p className="text-base md:text-xl text-white font-normal inter-var text-center">
        Software-Engineer
      </p>
    </WavyBackground>
  );
}
