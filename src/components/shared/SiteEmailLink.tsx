import { EmailContent } from "@/types";

interface SiteEmailLinkProps {
  emailData: EmailContent;
}
export const SiteEmailLink = ({ emailData }: SiteEmailLinkProps) => {
  return (
    <a href={`mailto:${emailData.to}`} target="_blank" className="underline">
      {emailData.text}
    </a>
  );
};
