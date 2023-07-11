import {
  Avatar as ArkAvatar,
  AvatarFallback,
  AvatarImage,
} from "@ark-ui/react";

export function Avatar() {
  return (
    <ArkAvatar>
      <AvatarFallback>SU</AvatarFallback>
    </ArkAvatar>
  );
}
