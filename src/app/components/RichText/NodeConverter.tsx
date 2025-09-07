import { SerializedElementNode } from "lexical";

type Props = {
  data: SerializedElementNode;
}

const NodeConverter = ({ data }: Props) => {
  console.log(data.type);
  return (
    <div>RichTextConverter</div>
  )
}

export default NodeConverter;