import { ContentType } from "@/types";
import { SiteLink } from "../shared/SiteLink";
import { SiteEmailLink } from "../shared/SiteEmailLink";

interface DocumentContentProps {
  content: ContentType[];
}

export const DocumentContent = ({ content }: DocumentContentProps) => {
  return (
    <ul className="flex flex-col gap-2 text-pretty">
      {content.map((item, ind) => (
        <li key={ind}>
          <p className="body2">
            {item.paragraph.map((data) => {
              if (data.type === "link") {
                return <SiteLink key="link" linkData={data} />;
              }
              if (data.type === "email") {
                return <SiteEmailLink key="email" emailData={data} />;
              }
              if (data.sublist) {
                return (
                  <span key="list" className="before:mx-2 before:content-['•']">
                    {data.text}
                  </span>
                );
              }
              return data.text;
            })}
          </p>
        </li>
      ))}
    </ul>
  );
};
