import React from "react";
import StatCard from "./StatCard";

import NoData from "./UI/NoData/NoData";

export default function StatList({ loading, history }) {
  let content = history.cases ? (
    <div className="grid grid-cols-1 gap-8 mx-auto mb-20 auto-rows-max sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <StatCard
        title="New Infections"
        number={history.cases.new}
        date={history.day}
        description="Number of new cases of COVID-19"
        color="red"
      />
      <StatCard
        title="Active cases"
        number={history.cases.active}
        date={history.day}
        description="Number of actives cases of COVID-19"
        color="red"
      />
      <StatCard
        title="Critical cases"
        number={history.cases.critical}
        date={history.day}
        description="Number of critical cases of COVID-19"
        color="yellow"
      />
      <StatCard
        title="Recovered"
        number={history.cases.recovered}
        date={history.day}
        description="Patients who recovered from COVID-19"
        color="green"
      />
      <StatCard
        title="New Deaths"
        number={history.deaths.new}
        date={history.day}
        description="Number of new deaths from COVID-19"
        color="gray"
      />
      <StatCard
        title="Total deaths"
        number={history.deaths.total}
        date={history.day}
        description="Total number of deaths from COVID-19"
        color="gray"
      />
    </div>
  ) : (
    <NoData />
  );

  return <div>{content}</div>;
}
