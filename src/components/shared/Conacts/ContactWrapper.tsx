import { useState } from "react";
import { ContactButton } from "./ContactButton";
import { ContactModal } from "./ContactModal";

export const ContactWrapper = ({ text, className }: { text: string; className?: string }) => {
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  return (
    <>
      <ContactButton text={text} onClick={() => setIsContactsOpen(true)} className={className} />
      <ContactModal isOpen={isContactsOpen} onClose={() => setIsContactsOpen(false)} />
    </>
  );
};
