import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  @Input() commentId;
  public editing = false;

  constructor(private commentService: CommentService) { }

  editComment(commentId) {
    console.log(`editing ${commentId}`);

    // show the edit fields and update button
    if (this.editing) {
      this.editing = false;
    } else {
      this.editing = true;
    }

  }

  updateComment(commentId, editedText, editedAuthor) {
    console.log(`updating ${commentId}`);
    this.commentService.updateComment(commentId, editedText, editedAuthor);
    this.editing = false;
  }

  ngOnInit() {
  }

}
