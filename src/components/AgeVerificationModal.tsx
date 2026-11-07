import React, { useEffect, useRef, useState } from 'react';

export const AGE_VERIFICATION_STORAGE_KEY = 'purnaturek_age_verified_21';

export function checkInitialAgeVerification(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.sessionStorage.getItem(AGE_VERIFICATION_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

interface AgeVerificationModalProps {
  isVerified: boolean;
  onVerifySuccess: () => void;
}

export const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({
  isVerified,
  onVerifySuccess,
}) => {
  const [isUnderageDenied, setIsUnderageDenied] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;

    if (!isVerified) {
      htmlEl.classList.add('age-gate-locked');
      bodyEl.style.overflow = 'hidden';
      // Focus the primary action button on initial mount when not denied
      if (!isUnderageDenied && yesButtonRef.current) {
        yesButtonRef.current.focus();
      } else if (isUnderageDenied && modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      htmlEl.classList.remove('age-gate-locked');
      bodyEl.style.overflow = '';
    }

    return () => {
      htmlEl.classList.remove('age-gate-locked');
      bodyEl.style.overflow = '';
    };
  }, [isVerified, isUnderageDenied]);

  // Strict keyboard trap & Escape key prevention while unverified
  useEffect(() => {
    if (isVerified) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      if (e.key === 'Tab') {
        const container = modalRef.current;
        if (!container) return;

        const focusableElements = container.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) {
          e.preventDefault();
          container.focus();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement || !container.contains(document.activeElement)) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement || !container.contains(document.activeElement)) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isVerified]);

  if (isVerified) {
    return null;
  }

  const handleConfirmAge = () => {
    try {
      window.sessionStorage.setItem(AGE_VERIFICATION_STORAGE_KEY, 'true');
    } catch {
      // Continue unlocking current tab state even if storage is restricted
    }
    document.documentElement.classList.remove('age-gate-locked');
    document.body.style.overflow = '';
    onVerifySuccess();
  };

  const handleDenyAge = () => {
    setIsUnderageDenied(true);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 select-none"
      style={{ backgroundColor: 'rgba(12, 26, 19, 0.50)' }}
      onClick={(e) => {
        // Explicitly block any backdrop dismissal
        e.stopPropagation();
      }}
      onContextMenu={(e) => e.stopPropagation()}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-verification-heading"
        aria-describedby="age-verification-message"
        tabIndex={-1}
        className="relative w-[90vw] md:w-[40vw] max-w-[430px] rounded-sm bg-[#F7F4EC] text-[#132A1F] shadow-modal border border-[#1B3B2B]/20 px-6 py-7 sm:px-8 sm:py-8 outline-none transition-all duration-200"
      >
        {/* Subtle top corner botanical frame line */}
        <div className="absolute inset-x-3 top-3 bottom-3 pointer-events-none border border-[#1B3B2B]/10" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Official PurNatureK Bulk Logo on Warm Cream Modal Card */}
          <div className="mb-3.5 inline-flex items-center justify-center">
            <img
              src="/images/logo-purnaturek-transparent.png"
              alt="PurNatureK Bulk"
              className="h-10 sm:h-11 w-auto object-contain select-none"
            />
          </div>

          <span className="text-[10px] font-mono uppercase tracking-[0.26em] text-[#35664D] mb-1.5">
            Purnature Khatulistiwa LLC • International Wholesale
          </span>

          {/* Mandatory Heading */}
          <h2
            id="age-verification-heading"
            className="font-serif text-2xl sm:text-[28px] font-semibold tracking-[0.06em] text-[#132A1F] mb-3"
          >
            AGE VERIFICATION
          </h2>

          <div className="w-12 h-[1px] bg-[#A48354]/60 mb-4" aria-hidden="true" />

          {/* Mandatory Message */}
          <p
            id="age-verification-message"
            className="text-xs sm:text-[13.5px] leading-relaxed text-[#264E3A] mb-3.5"
          >
            You must be at least 21 years of age or older to enter and view our products.
          </p>

          {!isUnderageDenied ? (
            <>
              {/* Mandatory Question */}
              <p className="font-serif text-base sm:text-lg font-semibold italic text-[#132A1F] mb-5">
                Are you 21 years of age or older?
              </p>

              {/* Mandatory Action Buttons */}
              <div className="w-full flex flex-col gap-2.5">
                <button
                  ref={yesButtonRef}
                  type="button"
                  onClick={handleConfirmAge}
                  className="w-full py-3 px-4 bg-[#1B3B2B] hover:bg-[#132A1F] active:bg-[#0C1A13] text-[#FCFBF8] text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#1B3B2B] focus:ring-offset-2 focus:ring-offset-[#F7F4EC]"
                >
                  YES, I AM 21 OR OLDER
                </button>

                <button
                  type="button"
                  onClick={handleDenyAge}
                  className="w-full py-2.5 px-4 bg-transparent hover:bg-[#1B3B2B]/8 text-[#1B3B2B] border border-[#1B3B2B]/35 text-xs font-semibold tracking-[0.16em] uppercase rounded-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#1B3B2B] focus:ring-offset-2 focus:ring-offset-[#F7F4EC]"
                >
                  NO, I AM UNDER 21
                </button>
              </div>
            </>
          ) : (
            /* Mandatory Denial State — No bypass or continue button */
            <div
              role="alert"
              aria-live="assertive"
              className="w-full mt-1 p-4 rounded-sm bg-[#132A1F] text-[#FCFBF8] border border-[#A48354]/40"
            >
              <p className="text-xs sm:text-sm font-medium leading-relaxed tracking-wide">
                Sorry, you must be at least 21 years old to access this website.
              </p>
              <p className="mt-2 text-[11px] text-[#C5D8CE] leading-normal">
                Access to PurNatureK wholesale botanical information is restricted to individuals 21 years of age or older.
              </p>
            </div>
          )}

          {/* Subtle B2B Access Notice */}
          <p className="mt-5 text-[10.5px] leading-snug text-[#4A8064]">
            Access screening for age-restricted botanical trade information. Not an authorization to purchase where prohibited by applicable jurisdiction.
          </p>
        </div>
      </div>
    </div>
  );
};

