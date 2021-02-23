import React, { useEffect, useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory } from "../../redux/actions/trackerActions";
import dayjs from "dayjs";

import { Calendar, Modal } from "react-rainbow-components";
import Spinner from "../../components/UI/Spinner/Spinner";
import Button from "../../components/UI/Button/Button";
import StatList from "../../components/StatList";
import ScrollTop from "../../components/UI/ScrollTop";
import classes from "./Global.module.css";

export default function Global() {
  let resultsRef = useRef();
  const dispatch = useDispatch();
  // const countries = useSelector((state) => state.tracker.countries);
  const { history } = useSelector((state) => state.tracker);
  const loading = useSelector((state) => state.apiStatus);
  // local state for calendar & country input
  const [date, setDate] = useState(new Date());
  // const [country, setCountry] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const getHistory = useCallback(
    (country, day) => {
      if (!day) {
        day = dayjs().format("YYYY-MM-DD");
      }
      const reportDay = formatDateToYearMonthDay(day);
      dispatch(fetchHistory(country, reportDay));
    },
    [dispatch]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      getHistory("All", date);
    }, 600000);

    return () => {
      clearInterval(interval);
    };
  }, [date, getHistory]);

  useEffect(() => {
    getHistory("All", date);
  }, [date, getHistory]);

  const formatDateToYearMonthDay = (date) => {
    return dayjs(date).format("YYYY-MM-DD");
  };

  const handleCalendarClick = (value) => {
    setDate(value);
    setIsOpen(false);
    window.scrollTo({
      behavior: "smooth",
      top: resultsRef.current.offsetTop,
    });
  };

  return (
    <main className="mx-auto">
      <div
        className={`${classes.jumbotron} flex flex-col items-center justify-center px-12 space-y-8 text-center text-white bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500`}
      >
        <h1 className="max-w-sm p-4 mx-auto mt-5 text-4xl font-light tracking-wide border-b-2 border-gray-200 font-display">
          Global Stats for <nobr>COVID-19</nobr>
        </h1>
        <p className="text-gray-300">
          The statistics are updated every 15 minutes. Last updated at{" "}
          {dayjs(history.time).format("HH:mm")}
        </p>
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
        <Button size="md" type="primary" click={() => setIsOpen(!isOpen)}>
          Pick a date
        </Button>
      </div>
      <div
        ref={resultsRef}
        className={`${classes.statistics} flex items-center justify-center`}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="my-20">
            <StatList history={history} />
          </div>
        )}
      </div>
      <ScrollTop />
    </main>
  );
}
