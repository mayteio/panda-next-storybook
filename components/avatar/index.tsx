import {
  Avatar as ArkAvatar,
  AvatarFallback,
  AvatarImage,
} from "@ark-ui/react/avatar";

export function Avatar() {
  return (
    <ArkAvatar>
      <AvatarFallback>SU</AvatarFallback>
    </ArkAvatar>
  );
}
