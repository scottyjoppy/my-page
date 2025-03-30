import BlogForm from "@/components/BlogForm";

function NewBlog() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-[repeat(auto-fill,minmax(4rem,12rem))] [&>*]:p-1 [&>*]:border-b-7 [&>*]:border-primary w-full [&>*]:grid [&>*]:place-items-center font-inter">
        <div className="col-span-full">
          <h1 className="title-css">Create Blog Page</h1>
        </div>
        <div className="col-span-full">
          <BlogForm />
        </div>
      </div>
    </>
  );
}

export default NewBlog;
