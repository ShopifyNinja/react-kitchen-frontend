import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  back,
  deleteIcon,
  whitePlus,
  tick2,
  cross,
  modalClose,
  modalTick,
  remove,
} from "../../assets/images/index";

function DrawSchedule({
  setSelectedSection,
  data,
  setInvoices,
  showData,
  setShowData,
  description,
  setDescription,
  value,
  setValue,
  addData,
  setAddData,
  showIcon,
  setShowIcon,
}) {
  const { progressInvoices } = data;
  const finalInvoice = "50";
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const toIndex = result.destination.index;
    const fromIndex = result.source.index;

    if (result.destination.index === result.source.index) {
      return;
    }
    const newData = [...progressInvoices];
    const item = newData.splice(fromIndex, 1)[0];
    newData.splice(toIndex, 0, item);
    const obj = {
      ...data,
      progressInvoices: newData,
    };
    setInvoices(obj);
  }

  const handleAdd = (e) => {
    if (!description || !value) {
      return;
    }
    e.preventDefault();
    let newData = {
      id: progressInvoices.length + 1,
      name: description,
      value: value,
    };
    setAddData([...addData].concat(newData));
    setValue("");
    setDescription("");
    const newArray =
      data && data.progressInvoices && data.progressInvoices.slice();
    newArray.push(newData);
    const obj = {
      ...data,
      progressInvoices: newArray,
    };
    setInvoices(obj);
    setShowData(false);
  };

  const toggle = () => setShowIcon(!showIcon);

  const deleteList = (index) => {
    const newList = [...progressInvoices];
    newList.splice(index, 1);
    const obj = {
      progressInvoices: newList,
    };
    setInvoices(obj);
  };

  return (
    <div className="user-list draw-schedule manage-photos">
      <div className="Cabinet-withback">
        <button
          className="back-btn"
          onClick={() => {
            setSelectedSection();
          }}
        >
          <img src={back} alt="back" />
        </button>
        <h2 className="menu-title">Draw Schedule</h2>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <ul className="photos-list draw-schedule-list  list-unstyled ">
          <div className="estimate-head">
            <h4 className="sub-title">PROGRESS INVOICES</h4>

            <div onClick={toggle}>
              {!showIcon ? (
                <div className="estimate-btn">
                  <button>
                    <img src={deleteIcon} alt="more" />
                  </button>
                </div>
              ) : (
                <div className="estimate-btn">
                  <button>
                    <img src={modalTick} alt="more" />
                  </button>
                </div>
              )}
            </div>
          </div>

          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {progressInvoices.map((invoice, index) => {
                  return (
                    <Draggable
                      draggableId={`progressInvoices_${index}`}
                      index={index}
                      key={index}
                    >
                      {(provided) => (
                        <li
                          key={invoice.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="photos-list-box">
                            <h3 className="photos-list-title text-ellipse">
                              {" "}
                              {invoice.name}
                            </h3>
                            <p>{invoice.value}</p>
                          </div>
                          {showIcon && (
                            <button
                              className="no-border"
                              onClick={() => {
                                deleteList(index);
                              }}
                            >
                              <img src={remove} alt="more" />
                            </button>
                          )}
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

      {showData && (
        <div className="pb-2 draw-schedule-description">
          <input
            type="text"
            placeholder="*Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required={true}
            className="descrip"
          />
          <div className="percent">
            <input
              type="number"
              placeholder="20%*"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required={true}
            />
            <div className="percent-icons">
              <button onClick={handleAdd}>
                <img src={modalTick} alt="tick2" />
              </button>

              <button onClick={() => setShowData(!showData)}>
                <img src={modalClose} alt="cross" />
              </button>
            </div>
          </div>
        </div>
      )}
      <ul className="user-detail-list voice-list list-unstyled ">
        <li className="user-detail-list-item">
          <h4> Final Invoice </h4>
          <p> {finalInvoice}% </p>
        </li>
      </ul>
      <div className="upload-box">
        <button onClick={() => setShowData(!showData)} className="upload-btn">
          <img src={whitePlus} alt="whitePlus" />
        </button>
      </div>
    </div>
  );
}

export default DrawSchedule;
