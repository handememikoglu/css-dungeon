const levels = [
  {
    id: 1,
    title: "Flex Başlangıcı",
    description: "Karakteri ortalamak için 'justify-content' kullan.",
    cssStarter: "display: flex;",
    solution: {
      display: "flex",
      "justify-content": "center"
    },
    hint: "Flexbox düzeniyle içerikleri yatayda ortalayabilirsin."
  },
  {
    id: 2,
    title: "Boşlukla Kaç",
    description: "Kutular arasına eşit boşluk koy ve çıkışı aç.",
    cssStarter: "display: flex;",
    solution: {
      display: "flex",
      "justify-content": "space-between"
    },
    hint: "Kutuların arasında eşit mesafe için bir justify-content değeri kullan."
  },
  {
    id: 3,
    title: "Köşeye Kaç",
    description: "Karakteri sağ alta yerleştir.",
    cssStarter: "display: flex; height: 100%;",
    solution: {
      display: "flex",
      "justify-content": "flex-end",
      "align-items": "flex-end"
    },
    hint: "Hem yatay hem dikeyde konumlandırmak gerekir."
  },
  {
    id: 4,
    title: "Grid'e Girdin!",
    description: "Kutuları iki sütunlu bir düzene yerleştir.",
    cssStarter: "display: grid;",
    solution: {
      display: "grid",
      "grid-template-columns": "1fr 1fr"
    },
    hint: "Grid sisteminde sütunları tanımlamak için 'grid-template-columns' kullanılır."
  },
  {
    id: 5,
    title: "Pozisyon Savaşı",
    description: "Karakteri üst üste yerleştir!",
    cssStarter: "position: relative;",
    solution: {
      position: "relative",
      "z-index": "2"
    },
    hint: "Z-index sayesinde elemanların üst sırasını belirleyebilirsin."
  }
]

export default levels
