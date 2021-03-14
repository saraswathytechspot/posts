import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import  {API_URL as apiBasePath, ROWS_COUNT as rowsCount}   from '../consts/globalConsts';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})

export class PostsService {
  
  constructor(private readonly http: HttpClient) {  }

  fetchPosts() {
    return this.http.get<Post[]>(
      `${apiBasePath}/posts`
    ).pipe(
      map(data => {
        return this.convertToMatrix(data)
      }),
      catchError(this.handleError<Post>(`getPosts`))
    )
  }

  convertToMatrix(list) {
    let matrix = list.reduce(this.generateRows(rowsCount), [], this);

    return matrix;
}

  /**
 * Handle Http operation that failed.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    return of(result as T);
  };
}

 /**
   * @param  {number} num Number of rows
   * Generate Rows
   */
  generateRows(num: number): Function {
    return function (rows, key, index) {
      return (
        (index % num == 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows
      );
    };
  }
}
