import { useEffect, useRef } from 'react';

export function useFocusTrap(isActive: boolean) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive || !elementRef.current) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = elementRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const first = elementRef.current?.querySelector(
      'button, [href], input'
    ) as HTMLElement;
    first?.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive]);

  return elementRef;
}
