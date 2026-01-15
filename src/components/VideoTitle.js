import { FaPlay } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { LOGO } from '../utils/constants';

const VideoTitle = ({ title, overview }) => {
  const getTwoSentences = (text) => {
    if (!text) return '';
    const sentences = text.split(/(?<=[.!?])\s+/);
    return sentences.slice(0, 2).join(' ');
  };
  return (
    <div className="absolute inset-0 z-10 w-screen aspect-video pt-[20%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/2 ">{getTwoSentences(overview)}</p>
      <div className="flex">
        <button className="flex bg-white text-black mr-2 text-xl font-semibold px-4 py-2 rounded hover:opacity-80">
          <FaPlay className="mt-1 mr-2" />
          Play
        </button>
        <button className="flex bg-gray-700 bg-opacity-70 text-white text-xl font-semibold px-4 py-2 rounded opacity-80 hover:opacity-100">
          <IoMdInformationCircleOutline className="mt-1 mr-2 size-5" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
