import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useEffect } from "react";

interface PromoDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function PromoDialog({ isOpen, setIsOpen }: PromoDialogProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 transition-all duration-300 ease-in-out data-[state=open]:animate-[fadeIn_300ms] data-[state=closed]:animate-[fadeOut_300ms] z-[100000]" />
        <Dialog.Content className="fixed left-[50%] top-[50%] w-[90%] md:w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 ease-in-out data-[state=open]:animate-[contentShow_300ms] data-[state=closed]:animate-[contentHide_300ms] z-[1000000]">
          <div className="text-center">
            <Dialog.Title className="text-2xl font-bold text-[#032A2C] mb-4">
              🎉 Follow Us, Get FREE Delivery! 🎉
            </Dialog.Title>
            <p className="text-lg mb-4">
              Yes, you heard it right! 🌟 Only our Instagram followers can enjoy
              FREE DELIVERY*.
            </p>
            <div className="space-y-2 mb-6 text-gray-600">
              <p>🍕 Craving food?</p>
              <p>🛒 Need groceries?</p>
              <p>💊 Running out of medicines?</p>
            </div>
            <p className="text-lg font-semibold text-[#00AFA1] mb-6">
              Faztro delivers it all—FREE! 🚀
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://www.instagram.com/faztroprime/"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                👉 Follow @FaztroPrime
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#032A2C] to-[#00AFA1] text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Order Now
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
