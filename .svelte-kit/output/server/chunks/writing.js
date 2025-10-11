import strftime from "strftime";
const utc = strftime.utc();
function formatTime(format, date) {
  return utc(format, new Date(date));
}
var data = [{
  title: "Heuristics Considered Harmful: RL With Random Rewards Should Not Make LLMs Reason",
  date: new Date(17525376e5),
  slug: "heuristics-considered-harmful",
  tags: "research, rl, llm",
  link: "https://fuchsia-arch-d8e.notion.site/Heuristics-Considered-Harmful-RL-With-Random-Rewards-Should-Not-Make-LLMs-Reason-21ba29497c4180ca86ffce303f01923d"
}];
export {
  data as d,
  formatTime as f
};
