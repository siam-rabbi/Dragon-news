import LeftsideBar from '@/components/Homepage/news/LeftsideBar';
import NewsCard from '@/components/Homepage/NewsCard';
import RightsideBar from '@/components/Homepage/RightsideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';


const NewsCategoryPage = async({params}) => {
    const {id}= await params
    console.log(id ,'paramsRes')

     const categories = await getCategories()
  

  const news = await getNewsByCategoryId(id)



    return (
        <div className=" container mx-auto grid grid-cols-12 gap-4 my-15">
  
  <div className="col-span-3">
    
   <LeftsideBar categories={categories} activeId={id}></LeftsideBar>
  </div>
  <div className=" col-span-6">
       {/* News Section */}
      <div className="col-span-6 space-y-4">
        {news?.map((n) => (
          <NewsCard key={n._id} news={n} />
        ))}
      </div>
  </div>
  <div className="  col-span-3">
  <RightsideBar></RightsideBar>
  </div>
  
   </div>
    );
};

export default NewsCategoryPage;