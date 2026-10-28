
import Marquee from 'react-fast-marquee';

const  news = [
  {
    id: 1,
    title: "Breaking: Government Announces New Education Policy",
  },
  {
    id: 2,
    title: "Technology: AI Innovations Transform the Digital World",
  },
  {
    id: 3,
    title: "Sports: National Team Secures a Thrilling Victory",
  },
];


const BreakingNews = () => {
  return (
    <div className=" flex items-center gap-4 bg-gray-200 px-2 py-4">
      <button className="btn shrink-0 bg-pink-500 text-white">
        Latest News
      </button>

      <div className="min-w-0 flex-1">
        <Marquee pauseOnHover={true} speed={80}>
         
            {news.map((n)=> (
               <span key={n.id}>{n.title}</span>
              ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;