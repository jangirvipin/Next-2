
import Button from "@/components/Button";
import PostCard from "@/components/Feed";
import NoData from "@/components/NoDATA";




async function pagaDATA(id:any){
    console.log("hello")
   const response=await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${id}`,{
               headers:{
                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`
             }
   });
   const ans = await response.json();
   const {articles}=ans;
   
   return articles;

}


export default async function Page({params}:any) {
  
   
    const {id}=params;

    

    const data = await pagaDATA(id);
   
    
    
    return (
    (!data ? <NoData /> :
        <>
        {data.map((article:any) => (
            <PostCard key={article.title} title={article.title} description={article.description} imageUrl={article.urlToImage} />
        ))}
       <Button number={id} />
        </>
    )
       
    )
}