import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-accent via-accent-soft to-amber transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
