import { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Clock, Copy, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText('advisory@excellis.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
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
        <div className="mb-8">
          <p
            className="text-white/40 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ letterSpacing: '0.12em' }}
          >
            Private Client Advisory
          </p>
          <h2
            className="text-2xl sm:text-3xl font-medium leading-tight text-white mb-3"
            style={{ letterSpacing: '-0.02em' }}
          >
            Direct Contact Details
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Connect directly with our senior wealth partners and investment advisory desk.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="space-y-4 mb-8">
          {/* Email */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white/80" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Direct Advisory Email</p>
                <a
                  href="mailto:advisory@excellis.com"
                  className="text-white text-base sm:text-lg font-medium hover:underline"
                >
                  advisory@excellis.com
                </a>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer border-none shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-white/70" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Telephone */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Global Advisory Desks</p>
              <div className="space-y-1">
                <div>
                  <a href="tel:+18008459270" className="text-white text-base font-medium hover:underline">
                    +1 (800) 845-9270
                  </a>
                  <span className="text-white/40 text-xs ml-2">(Toll-Free North America)</span>
                </div>
                <div>
                  <a href="tel:+442079460920" className="text-white text-base font-medium hover:underline">
                    +44 20 7946 0920
                  </a>
                  <span className="text-white/40 text-xs ml-2">(Europe & UK Desk)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Key Advisory Hubs</p>
              <p className="text-white/80 text-sm leading-relaxed">
                London (Mayfair) • New York (Madison Ave) • Singapore (Marina Bay) • Dubai (DIFC) • Zurich
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-white/80" />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Hours of Operation</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Monday – Friday: 8:00 AM – 7:00 PM (Local Desk Hours)
                <br />
                <span className="text-white/50 text-xs">Dedicated 24/7 private desk available for active clients.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end gap-3">
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
