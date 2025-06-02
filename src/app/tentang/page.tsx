export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Tentang Saya</h1>
      <div className="card">
        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            Selamat datang di blog pribadi saya! Saya Obed Pakpahan yang terpanggil sebagai seorang pengembang web yang
            bersemangat dalam menciptakan solusi digital yang inovatif dan bermanfaat.
          </p>
          <p className="mb-4">
            Dengan pengalaman dalam pengembangan web modern menggunakan teknologi
            seperti React, Next.js, dan TypeScript, saya senang berbagi pengetahuan
            dan pengalaman melalui blog ini.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-4">Keahlian</h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Frontend Development (React, Next.js, TypeScript)</li>
            <li>Backend Development (Node.js, Express)</li>
            <li>UI/UX Design</li>
            <li>Web Performance Optimization</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-4">Kontak</h2>
          <p>
            Jika Anda tertarik untuk berkolaborasi atau memiliki pertanyaan,
            jangan ragu untuk menghubungi saya melalui halaman kontak atau
            media sosial yang tersedia.
          </p>
        </div>
      </div>
    </div>
  );
}
