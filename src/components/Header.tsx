"use client";

import Logo from "./Logo";
import CustomButton from "./CustomButton";
import ThemeToggler from "./ThemeToggler";
import { useModalStore } from "@/store/modalStore";
import CreateClientModal from "./CreateClientModal";

const Header = () => {
  const { toggleOpenModal, isModalOpen } = useModalStore();

  return (
    <header className="w-full h-[10vh] shadow-sm shadow-btn">
      <div className="wrapper flex items-center justify-between w-full h-full">
        <Logo />
        <ThemeToggler />
        <CustomButton
          label="Add Client"
          styles="md:w-48"
          clickAction={toggleOpenModal}
        />
        {isModalOpen ? <CreateClientModal /> : null}
      </div>
    </header>
  );
};

export default Header;
