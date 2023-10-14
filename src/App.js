import React, { useState } from "react";
import moment from "moment";
function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function DateTimePretty(props) {
  let currentDate = moment(new Date());
  let videoDate = moment(props.date);
  let newDate;
  console.log(videoDate);
  let hoursDifference = currentDate.diff(videoDate, "hours");
  console.log(hoursDifference);
  if (hoursDifference < 1) {
    newDate = "12 минут назад";
  } else if (hoursDifference > 24) {
    let daysDifference = currentDate.diff(videoDate, "days");
    newDate = `${daysDifference} дней назад`;
  } else if (hoursDifference > 1) {
    newDate = "5 часов назад";
  }
  return <DateTime date={newDate} />;
}

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={props.date} rfc={DateTime} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url:
        "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-07-31 13:24:00"
    },
    {
      url:
        "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-10-10 11:33:00"
    },
    {
      url:
        "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-02-03 23:16:00"
    },
    {
      url:
        "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00"
    },
    {
      url:
        "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-10-02 16:17:00"
    },
    {
      url:
        "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-10-10 05:24:00"
    }
  ]);

  return <VideoList list={list} />;
}
