import { useContext } from "react";
import { useDrag, DragPreview } from "react-dnd";
import ActivityCard from "../../activity-card";
import { ThemeContext } from "styled-components";
import AsContext from "../../../../contexts/as-context";

function DragCard({ content, children, customRadius, item }) {
  const themeContext = useContext(ThemeContext);
  const asContext = useContext(AsContext);
  const [collected, drag] = useDrag(() => ({
    type: "image",
    item,
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));
  return collected.isDragging ? (
    <ActivityCard
      customAspectRatio={asContext?.aspectRatio}
      color={themeContext?.colors?.lightGrey}
    />
  ) : (
    <div ref={drag}>
      <ActivityCard
        customAspectRatio={asContext?.aspectRatio}
        customRadius={customRadius}
      >
        {content || children}
      </ActivityCard>
    </div>
  );
}

export default DragCard;
