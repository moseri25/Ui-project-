import { useCallback } from 'react';

export type SoundType = 'click' | 'pop' | 'success' | 'error' | 'switch' | 'hover';

const SOUNDS: Record<SoundType, string> = {
  click: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  pop: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  success: 'https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3',
  error: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
  switch: 'https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3',
  hover: 'https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3',
};

export function useSound() {
  const playSound = useCallback((type: SoundType, volume = 0.5) => {
    try {
      const audio = new Audio(SOUNDS[type]);
      audio.volume = volume;
      audio.play().catch(err => console.warn('Sound playback failed:', err));
    } catch (error) {
      console.warn('Audio not supported or failed to load:', error);
    }
  }, []);

  return { playSound };
}
