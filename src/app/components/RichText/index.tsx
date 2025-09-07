import { SerializedEditorState, SerializedElementNode } from "lexical";
import NodeConverter from "./NodeConverter";
import { twMerge } from "tailwind-merge";




type Props = {
  data: SerializedEditorState;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>

const RichText = ({ data, className }: Props) => {
  console.log("n", data);

  return (
    <div className={twMerge("", className)}>
      { data.root.children.map((child, index) => <NodeConverter key={"richText_root_" + index} data={child as SerializedElementNode} />) }
    </div>
  )
}

export default RichText;