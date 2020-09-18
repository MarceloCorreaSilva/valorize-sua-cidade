/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

interface PaginationProps {
  itemsOnPage: number;
  onPaginationChange: (start: number, end: number) => void;
  total: number;
  links?: boolean;
  alignment?: "center" | "right";
}

const Pagination: React.FC<PaginationProps> = ({
  itemsOnPage,
  onPaginationChange,
  total,
  links = false,
  alignment,
}) => {
  const [counter, setCounter] = useState(1);
  const [numberOfLinks] = useState(Math.ceil(total / itemsOnPage));

  useEffect(() => {
    const value = itemsOnPage * counter;
    onPaginationChange(value - itemsOnPage, value);
  }, [counter]);

  const onButtonClick = (type: string) => {
    console.log(type);
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfLinks === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }

    return false;
  };

  const setLinks = () => {
    return new Array(numberOfLinks).fill("").map((el, index) => (
      <li
        key={index}
        className={`${index + 1 === counter ? "uk-active" : null}`}
      >
        <button
          className="uk-button uk-button-default"
          onClick={() => setCounter(index + 1)}
        >
          {index + 1}
        </button>
      </li>
    ));
  };

  return (
    <ul
      className={`uk-pagination ${alignment ? "uk-flex-" + alignment : null}`}
      data-uk-pagination={`{items:${total}, itemsOnPage:${itemsOnPage}}`}
    >
      <li className={`${counter === 1 ? "uk-disabled" : null}`}>
        <button
          className="uk-button uk-button-default"
          onClick={() => onButtonClick("prev")}
        >
          <span uk-icon="arrow-left"></span> Anterior
        </button>
      </li>
      {links && setLinks()}
      <li className={`${counter === numberOfLinks ? "uk-disabled" : null}`}>
        <button
          className="uk-button uk-button-default"
          onClick={() => onButtonClick("next")}
        >
          Próximo <span uk-icon="arrow-right"></span>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
