import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.css']
})
export class DeleteCommentComponent implements OnInit {

  @Input() commentId;

  constructor(private commentService: CommentService) { }

  removeComment(commentId) {
    //console.log(`removing ${commentId}`);
    this.commentService.removeComment(commentId);
  }

  ngOnInit() {
  }

}
