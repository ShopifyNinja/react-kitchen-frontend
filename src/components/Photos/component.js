import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { deleteIcon, back } from "../../assets/images/index";

function Photos({ photos, setSelectedSection, setImages }) {
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const toIndex = result.destination.index;
    const fromIndex = result.source.index;

    if (result.destination.index === result.source.index) {
      return;
    }
    const data = [...photos];
    const item = data.splice(fromIndex, 1)[0];
    data.splice(toIndex, 0, item);
    setImages(data);
  }
  return (
    <div className="user-list manage-photos">
      <div className="Cabinet-withback">
        <button className="back-btn">
          <img
            src={back}
            alt="back"
            onClick={() => {
              setSelectedSection();
            }}
          />
        </button>
        <h2 className="menu-title">Photos</h2>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <ul className="photos-list list-unstyled ">
          <div className="estimate-head">
            <h4 className="sub-title">MANAGE PHOTOS</h4>
            <div className="estimate-btn">
              <button>
                <img src={deleteIcon} alt="edit" />
              </button>
            </div>
          </div>

          <Droppable droppableId="droppable">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {photos.map((item, index) => {
                  return (
                    <Draggable
                      draggableId={`photo_${index}`}
                      index={index}
                      key={index}
                    >
                      {(provided) => (
                        <li
                          key={item.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <img
                            className="manage-photos-pic"
                            src={item.file}
                            alt="photos"
                          />

                          <div className="photos-list-box">
                            <h3 className="photos-list-title"> {item.name}</h3>
                            {index === 0 && <p>Cover Photo</p>}
                          </div>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ul>
      </DragDropContext>
    </div>
  );
}

export default Photos;
