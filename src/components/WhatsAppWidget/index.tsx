import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export function WhatsAppWidget() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <a
          href="https://wa.me/5514997171882"
          target="_blank"
          className="bg-green-600 hover:bg-green-700 transition-colors p-4 rounded-full fixed bottom-8 right-8 z-10"
        >
          <Image
            width={36}
            height={36}
            src="/icons/whatsapp.svg"
            alt="WhatsApp"
          />
        </a>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <a
            target="_blank"
            href="https://wa.me/5514997171882"
            className="w-full"
          >
            <DropdownMenuItem><b>Vitor</b> - (14) 99717-1882</DropdownMenuItem>
          </a>
          <a
            target="_blank"
            href="https://wa.me/5514997131098"
            className="w-full"
          >
            <DropdownMenuItem><b>Tais</b> - (14) 99713-1098</DropdownMenuItem>
          </a>
          <a
            target="_blank"
            href="https://wa.me/5514998574608"
            className="w-full"
          >
            <DropdownMenuItem><b>Caio</b> - (14) 99857-4608</DropdownMenuItem>
          </a>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
