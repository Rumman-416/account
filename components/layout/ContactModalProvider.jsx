import { createContext, useCallback, useContext, useMemo, useState } from "react";
import ContactModal from "./ContactModal";

const ContactModalContext = createContext({
  openContactModal: () => {},
  closeContactModal: () => {},
});

export const useContactModal = () => useContext(ContactModalContext);

// The modal used to be local state inside Header, so nothing else could open
// it - the "Enquire Now" buttons on the service pages had no handler at all.
export default function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactModal = useCallback(() => setIsOpen(true), []);
  const closeContactModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openContactModal, closeContactModal }),
    [openContactModal, closeContactModal]
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal open={isOpen} onClose={closeContactModal} />
    </ContactModalContext.Provider>
  );
}
