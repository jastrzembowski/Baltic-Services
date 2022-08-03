import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./offerbox.scss";

function Filter() {
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [options, setOptions]: any = useState<{}>({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name: string, operation: string) => {
    setOptions((prev: object) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };
  return (
    <div className="filter-box">
      <h3>Wyszukiwarka apartamentów</h3>
      <div className="filter-item">
        <span>
          {" "}
          <FontAwesomeIcon icon={faBed} className="filter-icon" /> Cel podróży
        </span>
        <input type="text" placeholder="Destination" className="filter-input" />
      </div>
      <div className="filter-item">
        <span>
          {" "}
          <FontAwesomeIcon icon={faCalendarDays} className="filter-icon" />{" "}
          Czas pobytu
        </span>
        <span
          onClick={() => setOpenDate(!openDate)}
          className="filter-text"
        >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item: any) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="filter-date"
          />
        )}
      </div>
      <div className="filter-item">
        <span>
          {" "}
          <FontAwesomeIcon icon={faPerson} className="filter-icon" />Liczba gości
        </span>
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="filter-text"
        >
          {`${options.adult} dorosły`} &middot; {`${options.children} dzieci`}{" "}
          &middot; {`${options.room} pokój`}
        </span>
        {openOptions && (
          <div className="filter-options">
            <div className="optionItem">
              <span className="optionText">Dorosły</span>
              <div className="optionCounter">
                <button
                  disabled={options.adult <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Dziecko</span>
              <div className="optionCounter">
                <button
                  disabled={options.children <= 0}
                  className="optionCounterButton"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Pokój</span>
              <div className="optionCounter">
                <button
                  disabled={options.room <= 1}
                  className="optionCounterButton"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  className="optionCounterButton"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="filter-item">
        <button className="filter-button">Szukaj</button>
      </div>
    </div>
  );
}

export default Filter;
