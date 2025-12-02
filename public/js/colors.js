const mountPaletteGenerator = () => {
  const paletteSwatches = Array.from({ length: 9 }, (_, index) =>
    document.getElementById(`color${index + 1}`)
  ).filter(Boolean);
  if (!paletteSwatches.length) {
    return;
  }

  const rotateInput = document.getElementById("rotate");
  const canvas = document.getElementById("canvas");
  const button = document.getElementById("myBtn");
  const hexLabels = paletteSwatches.map((swatch) => swatch.nextElementSibling);

  let currentColors = [];

  const hslToHex = (h, s, l) => {
    const a = (s * Math.min(l, 100 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round((255 * color) / 100)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const drawCanvas = (colors = currentColors) => {
    if (!canvas || !colors.length) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(ratio, ratio);
    const gradient = ctx.createLinearGradient(0, 0, rect.width, 0);
    const stops = colors.length - 1 || 1;
    colors.forEach((color, index) => {
      gradient.addColorStop(index / stops, color);
    });
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);
  };

  const applyPalette = (colors) => {
    paletteSwatches.forEach((swatch, index) => {
      const color = colors[index];
      if (!color) return;
      swatch.style.backgroundColor = color;
      swatch.style.boxShadow = `0 15px 30px ${color}65`;
      const label = hexLabels[index];
      if (label) {
        label.textContent = color.toUpperCase();
      }
    });
  };

  const generatePalette = () => {
    const baseHue = Math.random() * 360;
    const rotateAmount = Number(rotateInput?.value) || 0;
    const palette = paletteSwatches.map((_, index) => {
      const row = Math.floor(index / 3);
      const column = index % 3;
      const rotation = row > 0 ? row * rotateAmount : 0;
      const hue = (baseHue + rotation + column * 12) % 360;
      const saturation = Math.min(95, 60 + column * 12);
      const lightness = Math.max(30, 70 - row * 8 - column * 3);
      return hslToHex(hue, saturation, lightness);
    });

    currentColors = palette;
    applyPalette(palette);
    drawCanvas(palette);
  };

  const handleKeydown = (event) => {
    const active = document.activeElement;
    if (event.code === "Space" && active !== rotateInput) {
      event.preventDefault();
      generatePalette();
      return;
    }

    if (event.key?.toLowerCase() === "e") {
      event.preventDefault();
      document.body.classList.toggle("palette-dark");
    }
  };

  const handleResize = () => {
    drawCanvas(currentColors);
  };

  const init = () => {
    rotateInput?.addEventListener("input", generatePalette);
    button?.addEventListener("click", generatePalette);
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", handleResize);
    window.addEventListener("beforeunload", () => {
      document.body.classList.remove("palette-dark");
    });
    generatePalette();
  };

  init();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountPaletteGenerator);
} else {
  mountPaletteGenerator();
}
