import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  type ChartOptions,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);

const ink = "#112249";
const axisColor = "rgba(17, 34, 73, 0.55)";
const gridColor = "rgba(17, 34, 73, 0.08)";
const accent = "#81bde5";
const midBlue = "#3b5b83";

const barOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y",
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#ffffff",
      borderColor: "rgba(17, 34, 73, 0.12)",
      borderWidth: 1,
      titleColor: ink,
      bodyColor: ink,
    },
  },
  scales: {
    x: {
      ticks: {
        color: axisColor,
        callback: (v) => Number(v).toLocaleString(),
      },
      grid: { color: gridColor },
      border: { color: gridColor },
    },
    y: {
      ticks: { color: axisColor },
      grid: { display: false },
      border: { display: false },
    },
  },
};

const doughnutOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "68%",
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: axisColor,
        boxWidth: 10,
        padding: 16,
      },
    },
    tooltip: {
      backgroundColor: "#ffffff",
      borderColor: "rgba(17, 34, 73, 0.12)",
      borderWidth: 1,
      titleColor: ink,
      bodyColor: ink,
    },
  },
};

export function ImpactCharts() {
  const volumeData = {
    labels: [
      "AP tests taken",
      "Students registered",
      "AP Scholars",
      "AP Scholars with Honor",
      "AP Scholars with Distinction",
    ],
    datasets: [
      {
        label: "2022 count",
        data: [2700, 1309, 172, 98, 172],
        backgroundColor: [accent, midBlue, "#2a4a6f", "#6ea0ff", "#5b86c7"],
        borderRadius: 8,
        barThickness: 18,
      },
    ],
  };

  const passRateData = {
    labels: ["Pass rate", "Non-pass share"],
    datasets: [
      {
        data: [83, 17],
        backgroundColor: [accent, "rgba(59, 91, 131, 0.15)"],
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  };

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs font-bold font-label uppercase tracking-[0.2em] text-sea">
            2022 participation snapshot
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">
            AP program volume metrics
          </h3>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/70 lg:text-base">
            Test volume, registration, and scholar-recognition totals based on the reported
            2022 figures for Denmark AP outcomes.
          </p>
        </div>
        <div className="h-64 w-full rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-inner lg:h-72">
          <Bar data={volumeData} options={barOptions} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs font-bold font-label uppercase tracking-[0.2em] text-sea">
            2022 success rate
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">
            Pass rate breakdown
          </h3>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink/70 lg:text-base">
            The highlighted pass rate is <span className="font-semibold text-ink">83%</span>,
            shown against the remaining share for a quick comparison.
          </p>
        </div>
        <div className="flex h-64 w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-inner lg:h-72">
          <div className="h-52 w-full max-w-xs">
            <Doughnut data={passRateData} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
