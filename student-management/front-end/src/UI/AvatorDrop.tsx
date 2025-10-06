import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { UserCog, LogOut } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatorDrop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="More Options"
          className="outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full"
        >
          <Avatar className="w-10 h-10">
            <AvatarImage src="/avatar.jpg" alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserCog />
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/**
         * 这是分割线
         */}
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
