import { TestBed } from '@angular/core/testing';

import { PostsListService } from './posts-list.service';

describe('PostsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostsListService = TestBed.get(PostsListService);
    expect(service).toBeTruthy();
  });
});
