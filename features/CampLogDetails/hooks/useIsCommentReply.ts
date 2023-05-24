import { useState } from "react";
const useIsCommentReply = () => {
  const [isReply, setIsRely] = useState(false);
  const handleIsReply = () => {
    setIsRely(!isReply);
  };

  return { handleIsReply, isReply };
};

export default useIsCommentReply;
