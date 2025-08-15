import { useState } from "react";

import { DocumentContent } from "./DocumentContent";
import { privacyPolicyText } from "@/assets/data/privacyPolicyText";
import { ModalBase } from "../shared/ModalBase";

const { title, subtitle, date, points } = privacyPolicyText;

export const PrivacyPolicy = ({ policyButton }: { policyButton: string }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);

  const onCloseModal = () => setIsOpenModal(false);
  return (
    <>
      <button
        onClick={onOpenModal}
        className="text-txligth m-0 cursor-pointer text-xs leading-none transition-all duration-500 hover:underline"
      >
        {policyButton}
      </button>
      <ModalBase
        isModalOpen={isOpenModal}
        onCloseModal={onCloseModal}
        className="md:max-w-[735px] lg:max-w-[800px]"
      >
        <div className="flex max-h-[90vh] flex-col md:max-h-[85vh]">
          <h2 className="font-alumni mt-4 mb-10 text-[20px] font-bold md:text-[30px]">{title}</h2>
          <DocumentContent content={subtitle} />
          <p className="body2 mt-3 mb-3 md:mt-6 md:mb-6">{date}</p>
          <div className="grow overflow-y-auto pr-[22px] md:pr-9">
            <ul className="flex flex-col gap-8 py-4">
              {points.map((item, index) => (
                <li key={index}>
                  <div className="bg-grey mb-4 h-[1px] w-full" />
                  <p
                    data-number={`${index + 1}.`}
                    className="body2 mb-4 flex gap-2 before:content-[attr(data-number)]"
                  >
                    {item.title}
                  </p>
                  <div className="bg-grey mb-4 h-[1px] w-full" />
                  <DocumentContent content={item.content} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ModalBase>
    </>
  );
};
