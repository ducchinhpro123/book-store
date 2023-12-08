import {blogJson} from "../json/BlogJson";

export default function Blog() {

  return (
      <div className="row d-flex justify-content-evenly">
        {blogJson.map((blog, index) => (
            <figure  key={index}
                    className="col-7 col-sm-6 col-md-5 col-lg-4 col-xl-3 mt-5 mt-lg-1 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="-mt-10">
                <img className="w-48 h-48 rounded-full mx-auto"
                    src={blog.book}
                    alt={blog.title}/>
              </div>
              <div className="pt-3 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">{blog.summary_content}</p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    {blog.author}
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    {blog.from}
                  </div>
                </figcaption>
              </div>
            </figure>
        ))}
      </div>
  );
}