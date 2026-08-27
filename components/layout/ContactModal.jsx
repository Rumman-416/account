import React, { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquireForm from "../contact-us/EnquireForm";
import { useScrollLock } from "./SmoothScroll";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ContactModal = ({ open, onClose }) => {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const returnFocusRef = useRef(null);

  useScrollLock(open);

  // Move focus into the dialog on open, hand it back to the trigger on close.
  useEffect(() => {
    if (!open) return;

    returnFocusRef.current = document.activeElement;
    const id = window.setTimeout(() => closeRef.current?.focus(), 60);

    return () => {
      window.clearTimeout(id);
      const trigger = returnFocusRef.current;
      if (trigger && typeof trigger.focus === "function") trigger.focus();
    };
  }, [open]);

  // Escape closes, and Tab cycles inside the dialog instead of escaping to the
  // page behind it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const items = Array.from(panelRef.current.querySelectorAll(FOCUSABLE));
      if (!items.length) return;

      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const stopPropagation = useCallback((e) => e.stopPropagation(), []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            onClick={stopPropagation}
            /* The form is taller than a phone screen, so the panel scrolls.
               data-lenis-prevent keeps Lenis from swallowing those wheel events. */
            data-lenis-prevent
            className="relative w-full max-w-[560px] lg:max-w-[40vw] max-h-[88vh] overflow-y-auto
              bg-dark-900 border border-white/[0.08] rounded-2xl
              p-6 sm:p-8 lg:p-[2.2vw]"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close contact form"
              className="absolute top-5 right-5 lg:top-[1.4vw] lg:right-[1.4vw]
                w-9 h-9 flex items-center justify-center rounded-full
                border border-white/10 text-white/70
                hover:border-brand-500 hover:text-brand-500 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M1 13L13 1"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="mb-6 lg:mb-[1.5vw] pr-12">
              <span className="subheading block mb-2">Let&apos;s Talk</span>
              <h2 id="contact-modal-title" className="heading-md text-white">
                Get in <span className="text-brand-500">Touch</span>
              </h2>
              <p className="content text-white/50 mt-2">
                Tell us what you need and we&apos;ll get back to you shortly.
              </p>
            </div>

            <EnquireForm />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
