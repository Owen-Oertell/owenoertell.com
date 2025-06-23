import strftime from "strftime";
const utc = strftime.utc();
function formatTime(format, date) {
  return utc(format, new Date(date));
}
var data = [{
  title: "Two Sides of ML Research",
  date: new Date(17506368e5),
  slug: "two-sides-of-ml-research",
  tags: "research, life"
}];
export {
  data as d,
  formatTime as f
};
