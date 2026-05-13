const videos = require("../data/videos.json");

module.exports = (req, res) => {
  const list = videos.videos;
  if (!list.length) return res.json({ error: "No videos found" });

  const random = list[Math.floor(Math.random() * list.length)];

  res.json({
    status: "success",
    title: random.title,
    video: random.link,
    total: list.length
  });
};
