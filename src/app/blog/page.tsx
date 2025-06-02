import BlogPost from "@/components/BlogPost";
import Sidebar from "@/components/Sidebar";

const allPosts = [
  {
    title: "Memulai Perjalanan dengan Next.js 14",
    excerpt: "Next.js 14 membawa banyak fitur baru yang menarik untuk pengembangan web modern. Mari kita eksplorasi bersama-sama...",
    date: "2025-06-02",
    slug: "memulai-nextjs-14",
    coverImage: "/vercel.svg"
  },
  {
    title: "Tips Produktivitas untuk Developer",
    excerpt: "Bagaimana cara meningkatkan produktivitas sebagai developer? Simak tips dan trik yang sudah terbukti efektif berikut ini...",
    date: "2025-06-01",
    slug: "tips-produktivitas-developer",
    coverImage: "/next.svg"
  },
  {
    title: "Belajar TypeScript untuk Pemula",
    excerpt: "TypeScript menjadi semakin populer di kalangan developer. Pelajari dasar-dasar TypeScript dalam artikel ini...",
    date: "2025-05-30",
    slug: "belajar-typescript-pemula",
    coverImage: "/vercel.svg"
  },
  {
    title: "Membangun API dengan Next.js",
    excerpt: "Pelajari cara membangun API yang powerful menggunakan fitur Route Handlers di Next.js 14...",
    date: "2025-05-28",
    slug: "membangun-api-nextjs",
    coverImage: "/next.svg"
  }
];

export default function BlogPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
      <div className="space-y-8">
        <section>
          <h1 className="text-3xl font-bold mb-6">Semua Artikel</h1>
          <div className="space-y-6">
            {allPosts.map((post) => (
              <BlogPost key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </div>
      <aside>
        <Sidebar />
      </aside>
    </div>
  );
}
