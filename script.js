const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
const languageButton = document.querySelector(".language-toggle");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
    });
  });
}

const translations = {
  id: {
    ".skip-link": "Lewati ke konten",
    ".nav": '<a href="#ecosystem">Ekosistem</a><a href="#principles">Prinsip</a><a href="#transparency">Transparansi</a><a href="#security">Keamanan</a><a href="#governance">Tata Kelola</a><a href="#community" class="nav-cta">Komunitas ↗</a>',
    ".eyebrow": "EKOSISTEM TERBUKA YANG TERUS BERKEMBANG",
    ".hero h1": 'Satu Rumah.<br><em>Beragam Sword Coin.</em><br>Satu Standar.',
    ".hero-lede": "MYBIE SWORD adalah identitas ekosistem yang dibangun berdasarkan prinsip bersama—bukan hanya satu token. Kami percaya kredibilitas diperoleh melalui tindakan, bukti, dan tanggung jawab.",
    ".hero-actions .button-gold": 'Jelajahi ekosistem <span>↘</span>',
    ".hero-actions .button-quiet": "Baca dokumentasi kami ↗",
    ".hero-note span:last-child": "Keamanan · Transparansi · Tanggung Jawab",
    ".hero-bottom": "<span>BERDIRI SEBAGAI PROYEK TERBUKA</span><span>INDEPENDEN · BERORIENTASI KOMUNITAS</span><span>GULIR UNTUK MENJELAJAH ↓</span>",
    "#ecosystem .section-label": "01 / EKOSISTEM",
    "#ecosystem .intro-content h2": 'Identitas bersama.<br><span>Standar yang konsisten.</span>',
    "#ecosystem .intro-content div": "<p>MYBIE SWORD adalah identitas induk bagi kumpulan proyek yang terus berkembang. Setiap proyek dapat memiliki tujuan sendiri, dengan tetap bertanggung jawab pada nilai-nilai inti yang sama.</p><p class=\"muted\">Ekosistem dikembangkan secara bertahap. Konsep masa depan tidak akan ditampilkan sebagai produk aktif sebelum diluncurkan dan diverifikasi secara independen.</p>",
    ".token-main .status": "PROYEK PERTAMA",
    ".token-main p": "Proyek mata uang kripto pertama di bawah identitas MYBIE SWORD.",
    ".token-meta": "<span>JARINGAN <b>Solana</b></span><span>JENIS <b>Token komunitas</b></span><span>KONTRAK <b>Belum dipublikasikan</b></span>",
    ".token-aside": '<span class="big-arrow">↗</span><span>Detail proyek<br>akan dipublikasikan<br>setelah diverifikasi.</span>',
    "#ecosystem > .footnote": "Halaman ini tidak menyiratkan adanya alamat token, pencatatan bursa, audit, atau status on-chain aktif. Detail teknis resmi hanya akan ditambahkan setelah diverifikasi.",
    "#principles .section-label": "02 / NILAI YANG KAMI JUNJUNG",
    ".section-heading h2": "Prinsip sebelum janji.",
    ".section-heading p": "Setiap proyek yang menggunakan identitas ini diharapkan menghormati landasan yang sama.",
    ".principle-grid": "<article><span>01</span><div class=\"principle-icon\">◇</div><h3>Keamanan</h3><p>Melindungi orang, akun, dompet, dan infrastruktur proyek melalui pengendalian yang cermat.</p></article><article><span>02</span><div class=\"principle-icon\">◎</div><h3>Transparansi</h3><p>Menyampaikan informasi penting dengan jelas serta membedakan fakta terverifikasi dari rencana dan niat.</p></article><article><span>03</span><div class=\"principle-icon\">✧</div><h3>Kejujuran</h3><p>Tidak menjanjikan hasil, menyembunyikan fakta penting, atau menyajikan asumsi sebagai kepastian.</p></article><article><span>04</span><div class=\"principle-icon\">⬡</div><h3>Tanggung Jawab</h3><p>Memahami konsekuensi keputusan dan mengomunikasikan perubahan secara bertanggung jawab.</p></article><article><span>05</span><div class=\"principle-icon\">⌑</div><h3>Akuntabilitas</h3><p>Menyimpan catatan, menerima pengawasan, memperbaiki kesalahan, dan menjelaskan perubahan.</p></article>",
    "#transparency .section-label": "03 / AKUNTABILITAS PUBLIK",
    ".split-heading h2": 'Kepercayaan harus<br><em>dapat diverifikasi.</em>',
    ".split-heading p": "Ketika fakta proyek tersedia, komunitas dapat menemukan bukti di sini—bukan sekadar pengumuman.",
    ".evidence-list": "<div><span class=\"evidence-number\">A</span><div><h3>Informasi token</h3><p>Alamat mint terverifikasi, detail jaringan, dan otoritas token yang relevan.</p></div><span class=\"evidence-state\">MENUNGGU VERIFIKASI</span></div><div><span class=\"evidence-number\">B</span><div><h3>Pengungkapan distribusi</h3><p>Penjelasan mekanisme distribusi dan dompet yang dikendalikan proyek.</p></div><span class=\"evidence-state\">MENUNGGU VERIFIKASI</span></div><div><span class=\"evidence-number\">C</span><div><h3>Bukti on-chain</h3><p>Tautan penjelajah blockchain dan referensi transaksi yang dapat diperiksa secara independen.</p></div><span class=\"evidence-state\">MENUNGGU VERIFIKASI</span></div><div><span class=\"evidence-number\">D</span><div><h3>Pembaruan proyek</h3><p>Perubahan penting, koreksi, dan catatan perkembangan beserta tanggal serta referensi pendukung.</p></div><span class=\"evidence-state\">BERKELANJUTAN</span></div>",
    "#transparency > .footnote": "Komitmen tertulis bukan bukti implementasi on-chain. Bukti hanya akan dipublikasikan setelah fakta terkait diperiksa.",
    "#security .section-label": "04 / KEAMANAN & OPERASIONAL",
    ".security-panel .eyebrow": "LINDUNGI KOMUNITAS",
    ".security-panel h2": 'Keamanan adalah proses.<br><em>Bukan sekadar slogan.</em>',
    ".security-panel > div:first-child > p:not(.eyebrow)": "Dokumentasi kami menetapkan standar perlindungan akun, pengelolaan dompet, kontrol akses, kontribusi yang aman, dan penanganan insiden. Prosedur harus diterapkan dan diuji—bukan hanya ditulis.",
    ".text-link": "Baca standar operasional keamanan ↗",
    ".security-stamp b": "KEAMANAN<br>SEJAK DESAIN",
    ".security-stamp small": "KONTROL TERDOKUMENTASI<br>MEMERLUKAN<br>IMPLEMENTASI",
    "#governance .section-label": "05 / TATA KELOLA",
    "#governance .intro-content h2": 'Peran yang jelas.<br><span>Keputusan bertanggung jawab.</span>',
    "#governance .intro-content div": "<p>Tata kelola dimulai dari kewenangan yang terdefinisi, keputusan yang terdokumentasi, pengungkapan konflik kepentingan, dan batas akses yang sesuai.</p><p class=\"muted\">Kerangka ini menjelaskan standar yang dituju. Dokumen ini tidak menyatakan bahwa dewan formal, sistem pemungutan suara, kas perbendaharaan, atau fungsi audit independen sudah aktif.</p>",
    ".governance-links": '<a href="https://github.com/MYBIESWORD/-MYBIE-SWORD-/blob/main/GOVERNANCE_FRAMEWORK.md"><span>Kerangka tata kelola</span><b>↗</b></a><a href="https://github.com/MYBIESWORD/-MYBIE-SWORD-/blob/main/COMMUNITY_GUIDELINES.md"><span>Pedoman komunitas</span><b>↗</b></a><a href="https://github.com/MYBIESWORD/-MYBIE-SWORD-/blob/main/ROADMAP.md"><span>Peta jalan pengembangan</span><b>↗</b></a><a href="https://github.com/MYBIESWORD/-MYBIE-SWORD-/"><span>Seluruh dokumentasi proyek</span><b>↗</b></a>',
    ".community .eyebrow": "BAB BERIKUTNYA DIBANGUN BERSAMA",
    ".community h2": 'Lebih Banyak Meme.<br><em>Mimpi Lebih Besar.</em>',
    ".community-inner > p:not(.eyebrow)": "Ikuti kanal resmi untuk mendapatkan pembaruan proyek. Periksa keaslian tautan dan jangan pernah percaya pesan pribadi tak diminta yang meminta dana, frasa pemulihan dompet, atau kunci privat.",
    ".footer-brand small": "SATU RUMAH. SATU STANDAR.",
    ".footer > p:first-of-type": "© <span id=\"year\"></span> MYBIE SWORD. Dibangun dengan prinsip.",
    ".footer-disclaimer": "Informasi ini disediakan hanya untuk komunikasi umum proyek. Tidak ada bagian dari situs ini yang merupakan nasihat keuangan, investasi, hukum, atau pajak. Aset mata uang kripto memiliki risiko yang signifikan.",
    ".back-top": "KEMBALI KE ATAS ↑"
  }
};

const original = new Map();
const selectors = Object.keys(translations.id);
selectors.forEach((selector) => {
  const element = document.querySelector(selector);
  if (element) original.set(selector, element.innerHTML);
});

function setLanguage(language) {
  document.documentElement.lang = language;
  selectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.innerHTML = language === "id" ? translations.id[selector] : original.get(selector);
  });
  if (languageButton) {
    languageButton.textContent = language === "id" ? "EN" : "ID";
    languageButton.setAttribute("aria-label", language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia");
  }
  document.title = language === "id"
    ? "MYBIE SWORD — Satu Rumah. Beragam Sword Coin. Satu Standar."
    : "MYBIE SWORD — One House. Multiple Sword Coins. One Standard.";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = language === "id"
    ? "MYBIE SWORD adalah ekosistem proyek yang berkembang dengan prinsip keamanan, transparansi, kejujuran, tanggung jawab, dan akuntabilitas."
    : "MYBIE SWORD is an evolving project ecosystem guided by security, transparency, honesty, responsibility, and accountability.";
  localStorage.setItem("mybie-language", language);
}

if (languageButton) {
  languageButton.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "id" ? "en" : "id";
    setLanguage(nextLanguage);
  });
}
const savedLanguage = localStorage.getItem("mybie-language");
if (savedLanguage === "id") setLanguage("id");

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
