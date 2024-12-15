import { ThemedText } from "@/components/ThemedText";

export interface Props {
  id: string | number;
}

export default function ArtworkScreen(props: Props) {
  return (
    <ThemedText>
      {props.id}
    </ThemedText>
  );
}
