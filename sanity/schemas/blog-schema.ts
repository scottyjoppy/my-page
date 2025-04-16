const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "blogSeries",
      title: "Blog Series",
      type: "string",
    },
    {
      name: "blogLine",
      title: "Blog Line",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "DD-MM-YYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
        },
        {
          type: "code",
          options: {
            language: "javascript",
            languageAlt: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "Python", value: "python" },
              { title: "HTML", value: "html" },
            ],
            withFilename: true,
          },
        },
      ],
    },
    {
      name: "sortOrder",
      title: "Sort Order",
      type: "number",
      description: "Highest First",
    },
  ],
};

export default blog;
