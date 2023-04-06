import { axiosSetting } from "api/api";
import { dummyCampLogList } from "features/Home/data/dummy";
import { useEffect, useState } from "react";
import Carousel from "../Carousel";

const url = "api/camplog";

export default function HomeCampLog() {
  const [campLogList, setCampLogList] = useState(dummyCampLogList);

  const fetchCampLog = async () => {
    const response = await axiosSetting.get(url);
    const data = response.data;
    setCampLogList(data);
  };

  //   useEffect(() => {
  //     fetchCampLog();
  //   }, []);

  return <Carousel slideType="캠프로그" slides={campLogList} />;
}
