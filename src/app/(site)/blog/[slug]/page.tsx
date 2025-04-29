import { PortableText } from "@portabletext/react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getBlog } from "../../../../../sanity/sanity-utils";

// const getPostContent = (slug: string) => {
//   const file = `blog-posts/${slug}.md`;
//   const content = fs.readFileSync(file, "utf8");
//   const matterResult = matter(content);
//   return matterResult;
// };

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// };

// const BlogPage = (props: any) => {
//   const slug = props.params.slug;
//   const post = getPostContent(slug);
//   return (
//     <>
//       <div className="border-b-8 border-primary flex items-center">
//         <div className="container px-5 mx-auto my-3 max-w-250">
//           <h3 className="text-left">{post.data.blogSeries}</h3>
//           <h4 className="text-left mb-5">{post.data.blogLine}</h4>
//           <h1 className="-ml-1 mb-5">{post.data.title}</h1>
//           <p className="mb-5">{post.data.description}</p>
//         </div>
//       </div>
//       <div className="container mx-auto my-10 max-w-250 px-5">
//         <p className="mb-3">{post.data.date}</p>
//         <article className="prose prose-lg max-w-none">
//           <ReactMarkdown
//             remarkPlugins={[remarkBreaks]} // Handle line breaks (two spaces or <br>)
//             rehypePlugins={[rehypeRaw, rehypeHighlight]} // Render raw HTML (e.g., <u>) and syntax highlight code
//             components={{
//               u: ({ node, ...props }) => <u {...props} />, // Custom component for <u> tag
//               a: ({ node, ...props }) => <a target="_blank" {...props} />, // Add target="_blank" to links
//               ul: ({ node, ...props }) => (
//                 <ul
//                   className="list-disc list-inside my-6 space-y-2"
//                   {...props}
//                 />
//               ),
//               ol: ({ node, ...props }) => (
//                 <ol
//                   className="list-decimal list-inside my-6 space-y-2"
//                   {...props}
//                 />
//               ),
//               li: ({ node, ...props }) => <li className="ml-4" {...props} />,
//             }}
//             skipHtml={false}
//           >
//             {post.content}
//           </ReactMarkdown>
//         </article>
//       </div>
//     </>
//   );
// };

interface Props {
  params: Promise<{ slug: string }>;
}

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        value?.asset?._ref && (
          <img src={value.asset.url} alt={value.alt || "Blog Image"} />
        )
      );
    },
    code: ({ value }: any) => {
      return (
        <SyntaxHighlighter
          language={value.language || "javascript"}
          style={dracula}
        >
          {value.code}
        </SyntaxHighlighter>
      );
    },
  },
  marks: {
    code: ({ children }: any) => (
      <code className="bg-gray-100 px-1 rounded">{children}</code>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl">{children}</h2>,
    h3: ({ children }: any) => (
      <h3 className="text-2xl underline">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="text-xl underline italix">{children}</blockquote>
    ),
  },
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateToString = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${Number(day)} ${months[Number(month) - 1]} ${Number(year)}`;
  };

  return (
    <>
      <div className="border-b-8 border-primary flex items-center">
        <div className="container px-5 mx-auto my-3 max-w-250">
          <h3 className="text-left">{blog.blogSeries}</h3>
          <h4 className="text-left mb-5">{blog.blogLine}</h4>
          <h1 className="-ml-1 mb-5">{blog.title}</h1>
          <p className="mb-5">{blog.description}</p>
        </div>
      </div>
      <div className="container mx-auto my-10 max-w-250 px-5">
        <div className="mb-4">{dateToString(blog.date)}</div>

        <PortableText value={blog.content} components={components} />
      </div>
    </>
  );
}
