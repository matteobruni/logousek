import { useContext } from "react";
import { useDrag, DragPreview } from "react-dnd";
import Bear from "../../../svg/templates/bear";
import ActivityCard from "../../activity-card";
import { ThemeContext } from "styled-components";

function DragCard({content, children, customRadius, item}) {
  const themeContext = useContext(ThemeContext);
  const [collected, drag] = useDrag(() => ({
    type: "image",
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <>
      {/* <DragPreview connect={dragPreview} src={<Bear />} /> */}
      {collected.isDragging ? (
        <ActivityCard color={themeContext?.colors?.lightGrey} />
      ) : (
        <div ref={drag}>
          <ActivityCard customRadius={customRadius}>{content || children}</ActivityCard>
        </div>
      )}
    </>
  );
}

export default DragCard;
