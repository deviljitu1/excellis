import { useEffect } from 'react';
import { X } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  category: string;
  content: string[];
  onClose: () => void;
}

export default function InfoModal({
  isOpen,
  title,
  category,
  content,
  onClose,
}: InfoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
        style={{ backgroundColor: '#181511', color: '#ffffff' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer border-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <p
            className="text-white/40 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ letterSpacing: '0.12em' }}
          >
            {category}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-medium leading-tight text-white mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            {title}
          </h2>
        </div>

        {/* Body content */}
        <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed mb-8">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Close action */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors cursor-pointer border-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
