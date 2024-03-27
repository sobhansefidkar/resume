/** @format */

import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./skills.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  Aos.init();
  const duplicatedData = [
    {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          value: {
            fontSize: "22px",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    {
      dashArray: 4,
    },
  ];
  const [frontEnd, setFrontEnd] = useState({
    series: [90],
    options: {
      plotOptions: duplicatedData[0],
      stroke: duplicatedData[1],
      labels: ["FrontEnd(React)"],
    },
  });
  const [backEnd, setBackEnd] = useState({
    series: [70],
    options: {
      plotOptions: duplicatedData[0],
      stroke: duplicatedData[1],
      labels: ["BackEnd(node)"],
    },
  });
  const [mongoDb, setMongoDb] = useState({
    series: [70],
    options: {
      plotOptions: duplicatedData[0],
      stroke: duplicatedData[1],
      labels: ["MongoDB"],
    },
  });
  const [english, setEnglish] = useState({
    series: [50],
    options: {
      plotOptions: duplicatedData[0],
      stroke: duplicatedData[1],
      labels: ["English skill"],
    },
  });
  const [networkBasics, setNetworkBasics] = useState({
    series: [60],
    options: {
      plotOptions: duplicatedData[0],
      stroke: duplicatedData[1],
      labels: ["Network Basics"],
    },
  });
  return (
    <section className='skill-section'>
      <div className='skill-title'>
        <h2 id='skills' data-aos='fade-up'>
          مهارت ها
        </h2>
      </div>
      <div className='skill-container'>
        <ReactApexChart
          data-aos='flip-right'
          data-aos-duration="500"
          options={frontEnd.options}
          series={frontEnd.series}
          type='radialBar'
          height={350}
        />
        <ReactApexChart
          data-aos='flip-right'
          data-aos-duration="1000"
          options={backEnd.options}
          series={backEnd.series}
          type='radialBar'
          height={350}
        />
        <ReactApexChart
          data-aos='flip-right'
          data-aos-duration="1500"
          options={mongoDb.options}
          series={mongoDb.series}
          type='radialBar'
          height={350}
        />
        <ReactApexChart
          data-aos='flip-right'
          data-aos-duration="2000"
          options={english.options}
          series={english.series}
          type='radialBar'
          height={350}
        />
        <ReactApexChart
          data-aos='flip-right'
          data-aos-duration="2500"
          options={networkBasics.options}
          series={networkBasics.series}
          type='radialBar'
          height={350}
        />
      </div>
    </section>
  );
}

export default Skills;
