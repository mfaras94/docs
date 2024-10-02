import { useRef } from "react";
import Card from "./Card";

function Forground() {
  const data = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: ".4mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      filesize: ".10mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
  ];

  const forgroundRef = useRef(null);

  return (
    <div
      ref={forgroundRef}
      className="fixed top-0 left-0 z-[3] w-full h-full p-8 flex gap-8 "
    >
      {data.map((item) => (
        <Card key={item.id} docs={item} reference={forgroundRef} />
      ))}
    </div>
  );
}

export default Forground;
