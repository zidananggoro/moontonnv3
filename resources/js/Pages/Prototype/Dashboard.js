import Authenticated from "@/Layouts/Authenticated/Index"
const Flickity = require('react-flickity-component');
import {Head} from "@inertiajs/inertia-react"
import FeaturedMovie from "@/Components/FeaturedMovie";

export default function Dashboard() {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    };
    return <Authenticated>
        <Head>
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
        <title>Dashboard</title>
        </Head>
        <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" elementType={"div"} options={flickityOptions} disableImagesLoaded={false}>

                        
                        {[1,2,3,4].map((i) => {
                            return (
                            <FeaturedMovie
                            key={i} 
                            slug="the-batman-in-love"
                            name={'The batman in love '}
                            category="superhero"
                            thumbnail="/images/featured-1.png"
                            rating={i+1}
                            ></FeaturedMovie> 
                            );
                        })}
                    </Flickity>
                </div>
                <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-[30px]"  options={flickityOptions} >
                    {[1,2,3,4,5,6].map((i) => {
                        return (
                            <div className="absolute group overflow-hidden mr-[30px]" key={i}>
                            <img src="/images/browse-1.png"
                                className="object-cover rounded-[30px] h-[340px] w-[250px]" alt=""/>
                            <div
                                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
                                <div className="px-7 pb-7">
                                    <div className="font-medium text-xl text-white">Meong Golden</div>
                                    <p className="mb-0 text-gray-300 text-base mt-[10px]">Horror • Love</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
                                -translate-x-1/2 z-20 transition ease-in-out duration-500">
                                <img src="/icons/ic_play.svg" className="" width="50" alt=""/>
                            </div>
                            <a href="watching.html" className="inset-0 absolute z-50"></a>
                        </div>
                            );
                        })}
                    </Flickity>
                </div>
    </Authenticated>;
}