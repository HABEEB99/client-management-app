import { twMerge } from "tailwind-merge";

interface ICustomButtonProps {
  label: string;
  styles?: string;
  clickAction?: () => void;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  label,
  clickAction,
  styles,
}) => {
  return (
    <button
      onClick={clickAction}
      className={twMerge(
        `bg-btn hover:opacity-70 active:opacity-90 rounded-md p-2 text-white font-bold`,
        styles
      )}
    >
      {label}
    </button>
  );
};

export default CustomButton;
