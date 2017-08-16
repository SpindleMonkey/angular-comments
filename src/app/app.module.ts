import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommentService } from './comment/comment.service';

import { AppComponent } from './app.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCommentComponent,
    DeleteCommentComponent,
    EditCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
