import { axiosSetting } from "api/api";
import { useState } from "react";
import Carousel from "../Carousel";

const url = "api/camp";
const datas = require("/public/data/dummyCampingSite.json");
export default function HomeCampingSite() {
  const [campLogList, setCampLogList] = useState(datas.content);
  console.log(campLogList, "Camp");
  // const fetchCampLog = async () => {
  //   const response = await axiosSetting.get(url);
  //   const data = response.data;
  //   setCampLogList(data);
  // };

  //   useEffect(() => {
  //     fetchCampLog();
  //   }, []);

  return <Carousel slideType="캠핑장" slides={campLogList} />;
}
