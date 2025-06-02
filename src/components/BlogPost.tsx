import { format } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  coverImage?: string;
}

const BlogPost = ({ title, excerpt, date, slug, coverImage }: BlogPostProps) => {
  return (
    <article className="card mb-8">
      {coverImage && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-2">
        <Link href={`/blog/${slug}`} className="hover:text-blue-600">
          {title}
        </Link>
      </h2>
      <p className="text-gray-600 text-sm mb-3">
        {format(new Date(date), 'dd MMMM yyyy')}
      </p>
      <p className="text-gray-700">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="inline-block mt-4 text-blue-600 hover:text-blue-700"
      >
        Baca Selengkapnya →
      </Link>
    </article>
  );
};

export default BlogPost;
