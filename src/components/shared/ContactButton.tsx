export const ContactButton = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="font-alumni mx-auto flex w-[288px] items-center justify-center border bg-white/10 py-3 text-lg leading-[18px] font-bold uppercase backdrop-blur-[10px]"
    >
      {text}
    </button>
  );
};
