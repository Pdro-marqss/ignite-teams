import { ButtonIcon } from "@components/ButtonIcon";

import { PlayerCardContainer, Name, Icon } from "./styles";

interface PlayerCardProps {
   name: string;
   onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
   return (
      <PlayerCardContainer>
         <Icon
            name="person"
         />

         <Name>
            {name}
         </Name>

         <ButtonIcon
            icon="close"
            type="SECONDARY"
            onPress={onRemove}
         />
      </PlayerCardContainer>
   );
}