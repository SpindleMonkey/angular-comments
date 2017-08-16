import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment/comment.service';
import {  } from ''

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  commented: string;
  commentee: string;

  constructor(private commentService: CommentService) { }

  addNewComment(newComment, newAuthor) {
    //console.log(`${newComment} -- ${newAuthor}`);
    if (newComment && newAuthor) {
      let brandNewComment = this.commentService.addComment(newComment, newAuthor);
      this.commented = null;
      this.commentee = null;
    } else {
      alert('Sorry, can\'t add a comment with no comment and/or author!');
    }
  }

  ngOnInit() {
  }

}
