import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchHistory } from "../redux/actions/trackerActions";
import Spinner from "./UI/Spinner/Spinner";
import { Calendar, Modal } from "react-rainbow-components";
import Button from "./UI/Button/Button";
import StatList from "./StatList";
import dayjs from "dayjs";
import { numberWithSpaces } from "../utilities/numberUtils";

import NoData from "./UI/NoData/NoData";
export default function Country() {
  const { country } = useParams();

  const dispatch = useDispatch();
  // const countries = useSelector((state) => state.tracker.countries);
  const { history } = useSelector((state) => state.tracker);
  const loading = useSelector((state) => state.apiStatus);
  // local state for calendar & country input
  const [date, setDate] = useState(new Date());
  // const [country, setCountry] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let day = date;
    if (!day) {
      day = dayjs().format("YYYY-MM-DD");
    }
    const reportDay = formatDateToYearMonthDay(day);
    dispatch(fetchHistory(country, reportDay));
  }, [date, dispatch, country]);

  const formatDateToYearMonthDay = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  const handleCalendarClick = (value) => {
    setDate(value);
    setIsOpen(false);
  };

  let content = history.country ? (
    <div className="mx-auto space-y-8 text-center bg-white">
      <h1 className="max-w-sm p-4 mx-auto mt-5 text-5xl font-light border-b-2 border-gray-700 font-display">
        Covid-19 stats for {country}
      </h1>
      <p className="text-gray-600">
        {`The statistics are updated every 15 minutes. Last updated at ${dayjs(
          history.time
        ).format("HH:mm")}`}
      </p>
      <div>
        <h3>Continent: {history.continent}</h3>
        {history.population ? (
          <h3>Total population: {numberWithSpaces(history.population)}</h3>
        ) : null}
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{ padding: "30px" }}
      >
        <Calendar
          value={date}
          onChange={(value) => handleCalendarClick(value)}
          minDate={new Date(2020, 2, 21)}
        />
      </Modal>
      <Button size="md" type="danger" click={() => setIsOpen(!isOpen)}>
        Pick a date
      </Button>
      <div className="flex flex-wrap items-start justify-center gap-10">
        {loading ? <Spinner /> : <StatList history={history} />}
      </div>
    </div>
  ) : (
    <NoData />
  );

  return <div className="flex justify-center">{content}</div>;
}
