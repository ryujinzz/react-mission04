import { useState } from 'react';

function App() {
  const [chat1, setChat1] = useState('');
  const [chat2, setChat2] = useState('');

  function handleSubmit1(e) {
    e.preventDefault();
    const chatData = new FormData(e.target);
    Array.from(chatData.entries()).map((name) => {
      setChat1(name[1]);
    });
  }

  function handleSubmit2(e) {
    e.preventDefault();
    const chatData = new FormData(e.target);
    Array.from(chatData.entries()).map((name) => {
      setChat2(name[1]);
    });
  }

  return (
    <div className="flex gap">
      <div className="mx-auto my-100pxr p-20pxr bg-yellow-400 text-center h-500pxr w-300pxr rounded-md">
        <div className="bg-white h-400pxr w-250pxr mx-auto mb-25pxr relative rounded-md">
          <span className="absolute right-1 top-4 px-2 border rounded-md border-solid border-2 border-orange-400 bg-orange-400">
            {chat2}
          </span>
          <span className="absolute left-1 top-20 px-2 border rounded-md border-solid border-2 border-yellow-400 bg-yellow-400">
            {chat1}
          </span>
        </div>
        <form onSubmit={handleSubmit1}>
          <label
            htmlFor="chat"
            className="overflow-hidden absolute w-1pxr h-1pxr p-0 border-0 whitespace-nowrap"
          >
            채팅창 입력란
          </label>
          <input
            type="text"
            id="chat"
            name="chatting"
            className="px-4 mr-1 rounded-md"
          />
          <button
            type="submit"
            className="px-1 bg-orange-400 border rounded-md border-solid border-2 border-orange-400"
          >
            보내기
          </button>
        </form>
      </div>
      <div className="mx-auto my-100pxr p-20pxr bg-yellow-400 text-center h-500pxr w-300pxr rounded-md">
        <div className="bg-white h-400pxr w-250pxr mx-auto mb-25pxr relative rounded-md">
          <span className="absolute right-1 top-4 px-2 border rounded-md border-solid border-2 border-orange-400 bg-orange-400">
            {chat1}
          </span>
          <span className="absolute left-1 top-20 px-2 border rounded-md border-solid border-2 border-yellow-400 bg-yellow-400">
            {chat2}
          </span>
        </div>
        <form onSubmit={handleSubmit2}>
          <label
            htmlFor="chat"
            className="overflow-hidden absolute w-1pxr h-1pxr p-0 border-0 whitespace-nowrap"
          >
            채팅창 입력란
          </label>
          <input
            type="text"
            id="chat"
            name="chatting"
            className="px-4 mr-1 rounded-md"
          />
          <button
            type="submit"
            className="px-1 bg-orange-400 border rounded-md border-solid border-2 border-orange-400"
          >
            보내기
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
