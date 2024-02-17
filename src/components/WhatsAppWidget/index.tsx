import Image from "next/image";

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/5514997171882"
      target="_blank"
      className="bg-green-600 hover:bg-green-700 transition-colors p-4 rounded-full fixed bottom-8 right-8 z-10"
    >
      <Image width={36} height={36} src="/icons/whatsapp.svg" alt="WhatsApp" />
    </a>
  );
}
