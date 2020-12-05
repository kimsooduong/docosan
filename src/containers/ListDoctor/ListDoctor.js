import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/Card/Card";
import "./style.scss";
import myData from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ListDoctor(props) {
  const [isShowSelectOrder, setIsShowSelectOrder] = useState(false);
  const [selectValueOrder, setSelectValueOrder] = useState("distance");
  const [isShowSelectFilter, setIsShowSelectFilter] = useState(false);
  const [selectValueFilter, setSelectValueFilter] = useState("");
  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShowSelectOrder(false);
          setIsShowSelectFilter(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);

  const handleShowSelectOrder = () => {
    setIsShowSelectOrder(true);
  };

  const handleShowSelectFilter = () => {
    setIsShowSelectFilter(true);
  };

  const handleChangeSelectFilter = (e) => {
    setSelectValueFilter(e.target.value);
    setIsShowSelectFilter(false);
  };

  const handleChangeSelectOrder = (e) => {
    setSelectValueOrder(e.target.value);
    setIsShowSelectOrder(false);
  };

  const mappingData = () => {
    return myData
      .filter((item) => item.language.includes(selectValueFilter))
      .sort(function abc(a, b) {
        if (selectValueOrder === "distance") {
          return b.distance - a.distance;
        }
        return b.rating - a.rating;
      });
  };

  const getShowFilterLabel = () => {
    switch (selectValueFilter) {
      case "vi":
        return "Tiếng Việt";
      case "en":
        return "English";
      case "fr":
        return "Français";
      default:
        return "Ngôn ngữ";
    }
  };

  const refreshFilter = (e) => {
    e.stopPropagation();
    setSelectValueFilter("");
  };
  return (
    <div className="list-doctor">
      <div className="title">Danh sách các bác sĩ</div>
      <div className="filter">
        <div>Sắp xếp theo</div>
        <div className="order">
          <div className="order-by" onClick={handleShowSelectOrder}>
            {selectValueOrder === "distance" ? "Khoảng Cách" : "Đánh giá"}
          </div>
          {isShowSelectOrder && (
            <div className="option" ref={wrapperRef}>
              <input
                type="radio"
                name="orderBy"
                id="distance"
                value="distance"
                checked={selectValueOrder === "distance"}
                onChange={(e) => handleChangeSelectOrder(e)}
              ></input>
              <label htmlFor="distance">Khoảng cách</label>
              <br />
              <input
                type="radio"
                id="rating"
                name="orderBy"
                value="rating"
                checked={selectValueOrder === "rating"}
                onChange={(e) => handleChangeSelectOrder(e)}
              ></input>
              <label htmlFor="rating">Đánh giá</label>
            </div>
          )}
        </div>

        <div>Lọc kết quả</div>
        <div className="filterx">
          <div
            className={`filter-by ${selectValueFilter ? "bg-green" : ""}`}
            onClick={handleShowSelectFilter}
          >
            {getShowFilterLabel()}
            {selectValueFilter && (
              <FontAwesomeIcon
                icon={faTimes}
                className="refresh-icon"
                onClick={(e) => refreshFilter(e)}
              />
            )}
          </div>
          {isShowSelectFilter && (
            <div className="option" ref={wrapperRef}>
              <input
                type="radio"
                name="filterBy"
                id="vi"
                value="vi"
                checked={selectValueFilter === "vi"}
                onChange={(e) => handleChangeSelectFilter(e)}
              ></input>
              <label htmlFor="vi">Tiếng Việt</label>
              <br />
              <input
                type="radio"
                id="en"
                name="filterBy"
                value="en"
                checked={selectValueFilter === "en"}
                onChange={(e) => handleChangeSelectFilter(e)}
              ></input>
              <label htmlFor="en">English</label>
              <br />
              <input
                type="radio"
                id="fr"
                name="filterBy"
                value="fr"
                checked={selectValueFilter === "fr"}
                onChange={(e) => handleChangeSelectFilter(e)}
              ></input>
              <label htmlFor="fr">Français</label>
            </div>
          )}
        </div>
      </div>

      <div className="list">
        {mappingData().map((data, index) => {
          return (
            <div key={index}>
              <Card data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
