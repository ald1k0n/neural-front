const EMOTION_LABELS_RU = {
  angry: "Злость",
  disgusted: "Отвращение",
  fearful: "Страх",
  happy: "Радость",
  neutral: "Нейтрально",
  sad: "Грусть",
  surprised: "Удивление",
};

export function emotionLabel(name) {
  return EMOTION_LABELS_RU[name] ?? name;
}
