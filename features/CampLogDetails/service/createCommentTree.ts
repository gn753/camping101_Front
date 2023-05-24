interface Comment {
  commentId: number;
  parentId: number;
  content: string;
  replies: Comment[];
}

const createCommentTree = (comments: any) => {
  const topLevelComments: any[] = [];
  const commentMap: any = {};

  // 댓글 객체에 parentId 속성을 추가하고, commentMap에 저장합니다.
  comments.forEach((comment: any) => {
    comment.parentId = comment.parentId || -1;
    comment.children = [];
    commentMap[comment.commentId] = comment;
  });

  // 최상위 댓글과 대댓글을 구분합니다.
  comments.forEach((comment: any) => {
    const parentId = comment.parentId;
    if (parentId === -1 || parentId === 0) {
      topLevelComments.push(comment);
    } else {
      const parentComment = commentMap[parentId];
      if (parentComment) {
        parentComment.children.push(comment);
      }
    }
  });

  return topLevelComments;
};

export default createCommentTree;
