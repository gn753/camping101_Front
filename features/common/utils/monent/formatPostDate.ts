import moment from "moment";

const formatPostDate = (date: string) => {
  const now = moment();
  const postDate = moment(date);
  const diffInDays = now.diff(postDate, "days");
  const diffInHours = now.diff(postDate, "hours");
  const diffInMinutes = now.diff(postDate, "minutes");

  if (diffInDays > 30) {
    return postDate.format("MMM D");
  }
  if (diffInDays >= 1) {
    return `${diffInDays}일 전`;
  }
  if (diffInHours >= 1) {
    return `${diffInHours}시간 전`;
  }
  return `${diffInMinutes}분 전`;
};

export default formatPostDate;
