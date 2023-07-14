import React from 'react'

const addComment = () => {
  return (
    <form className="flex flex-col gap-3 m-8">
      <input
        placeholder="Comment title"
        type="text"
        className="border border-slate-500 px-8 py-2"
      ></input>

      <input
        placeholder="Add your comment here"
        type="text"
        className="border border-slate-500 px-8 py-2"
      ></input>

      <button className='bg-green-900 text-white px-6  py-2 
      w-fit rounded-md'> Post comment</button>
    </form>
  );
}

export default addComment
