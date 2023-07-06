

function CommentSection() {
  return (
    <>
      <div className="w-full p-4 min-w-[200px] border-2 border-primaryBrown bg-primaryBrown/70">
        <h3 className="text-center font-semibold pb-12 text-xl">Share your opinion</h3>
        <form className="flex flex-col items-center justify-center gap-4 pb-12">
          <div className="flex flex-col items-center justify-center">
            <label for="name">Name*</label>
            <input
              type="text"
              name="name"
              className="min-w-[300px] h-10 p-2"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <label for="email">Email*</label>
            <input
              type="email"
              name="email"
              className="min-w-[300px] h-10 p-2"
              required
            />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <label>Your comment*</label>
            <textarea rows="8" cols="60" className="p-2 text-lg" required></textarea>
          </div>
          <button
            type="submit"
            value="submit"
            className="w-1/2 max-w-[300px] p-2 border border-black cursor-pointer bg-primaryBlue rounded-sm
          font-semibold hover:translate-y-1 shadow-lg"
          >
            Post comment
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentSection;
