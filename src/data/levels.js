const levels = [
  {
    id: 1,
    title: "Flex Başlangıcı",
    description: "Karakteri kutuların ortasına getirin.",
    html: `<div class="room"><div></div><div class="player"></div><div></div></div>`,
    cssStarter: "display: flex;",
    solution: {
      display: "flex",
      "justify-content": "center"
    },
    hint: "Unutma, içerikleri ortalamak için justify-content kullanabilirsin!"
  },
  {
    id: 2,
    title: "Boşluk Yarat",
    description: "Karakteri kutuların arasına eşit boşluklarla yerleştirin.",
    cssStarter: "display: flex;",
    solution: {
      display: "flex",
      "justify-content": "space-between"
    },
    hint: "Unutma, kutular arasına boşluk eklemek için justify-content: space-between kullanabilirsin!"
  },
  // Devamı eklenecek...
]

export default levels
