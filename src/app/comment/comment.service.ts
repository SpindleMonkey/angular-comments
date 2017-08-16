import { Injectable } from '@angular/core';

@Injectable()
export class CommentService {

  private commentId: number = 73;

  private comments = [
    { id: 70, aComment: 'first comment!', author: 'Stumpy Joe' },
    { id: 71, aComment:'nice work!', author: 'Maurice' },
    { id: 72, aComment: 'I would also like to congratulate you!', author: 'Lola' }
  ];

  constructor() { }

  getAllComments() {
    return this.comments;
  }

  addComment(newComment, newAuthor)  {
    let newest = {id: this.commentId, aComment: newComment, author: newAuthor};
    this.commentId++;
    this.comments.push(newest);
    return newest;
  }

  removeComment(commentId) {
    //console.log(`removing comment ${commentId}`);
    this.comments.splice(commentId, 1);
  }

  updateComment(commentId, editedText, editedAuthor) {
    //console.log(`updating comment ${commentId}`);
    if (editedText) {
      this.comments[commentId].aComment = editedText;
    }
    if (editedAuthor) {
      this.comments[commentId].author = editedAuthor;
    }
  }

}

