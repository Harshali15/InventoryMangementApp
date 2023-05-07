import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from '../comment.service';
import { Comments } from '../comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsGuard implements Resolve<Comments[]> {
  
    constructor(private commentService: CommentService) { }
  
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<Comments[]> {
      return this.commentService.getComments();
    }
  
  
}
