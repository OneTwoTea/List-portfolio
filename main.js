/* ==========================================================================
   List Project Portfolio — hiệu ứng
   1. Tách tiêu đề thành từng chữ cái, mỗi dòng bay vào từ một bên, lần lượt
   2. Hiện dần các thẻ dự án khi cuộn tới
   ========================================================================== */

const LINE_GAP = 0.55;   // giây: dòng sau bắt đầu sau dòng trước
const CHAR_STAGGER = 0.045; // giây: độ trễ giữa các chữ cái
const CHAR_DURATION = 1.1;  // giây: khớp với animation fly-in trong style.css

function splitTitle() {
  const title = document.querySelector('.title');
  if (!title) return;

  const lines = title.querySelectorAll('.title__line');
  let lastEnd = 0;

  lines.forEach((line, lineIndex) => {
    const chars = [...line.textContent.trim()];
    const fromLeft = line.dataset.from === 'left';
    const start = lineIndex * LINE_GAP;

    line.textContent = '';
    chars.forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'title__char';
      span.textContent = ch;
      // Chữ ở phía đầu đoàn (gần đích nhất) đi trước: bay từ trái thì chữ cuối dẫn đầu
      const order = fromLeft ? chars.length - 1 - i : i;
      const delay = start + order * CHAR_STAGGER;
      span.style.setProperty('--delay', `${delay.toFixed(3)}s`);
      line.appendChild(span);
      lastEnd = Math.max(lastEnd, delay + CHAR_DURATION * 0.7);
    });
  });

  // Mô tả, nút và gạch chân xuất hiện khi chữ gần ghép xong
  title.closest('.hero__center').style.setProperty('--after', `${lastEnd.toFixed(2)}s`);
  title.classList.add('is-ready');
}

function revealCards() {
  const items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in', 'is-done'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    // Các thẻ vào màn hình cùng lúc thì hiện lần lượt
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry, i) => {
        const el = entry.target;
        el.style.setProperty('--reveal-delay', `${i * 0.08}s`);
        el.classList.add('is-in');
        el.addEventListener('transitionend', () => el.classList.add('is-done'), { once: true });
        observer.unobserve(el);
      });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach((el) => observer.observe(el));
}

// Đợi font tải xong (tối đa 1.5 giây) để chữ không đổi hình dạng giữa lúc đang bay
const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
Promise.race([fontsReady, new Promise((r) => setTimeout(r, 1500))]).then(splitTitle);

revealCards();
