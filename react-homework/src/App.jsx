import { useState } from 'react';

function App() {
  const [chat, setChat] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const chatData = new FormData(e.target);
    Array.from(chatData.entries()).map((name) => {
      setChat(name[1]);
    });
  }
  return (
    <div className="mx-auto my-100pxr p-20pxr bg-yellow-400 text-center h-500pxr w-300pxr rounded-md">
      <div className="bg-white h-400pxr w-250pxr mx-auto mb-25pxr relative rounded-md">
        <span className="absolute right-1 top-4 px-2 border rounded-md border-solid border-2 border-orange-400 bg-orange-400">
          {chat}
        </span>
        <span className="absolute left-1 top-20 px-2 border rounded-md border-solid border-2 border-yellow-400 bg-yellow-400">
          안녕 나는 b라고 해
        </span>
      </div>
      <form onSubmit={handleSubmit}>
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
  );
}

export default App;
