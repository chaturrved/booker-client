import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Bookmark = {
  __typename?: 'Bookmark';
  _id: Scalars['String']['output'];
  links: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CreateBookmarkInput = {
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBookmark: Bookmark;
  createUser: User;
};


export type MutationCreateBookmarkArgs = {
  createBookmarkData: CreateBookmarkInput;
};


export type MutationCreateUserArgs = {
  createUserData: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  bookmarks: Array<Bookmark>;
  user: User;
};


export type QueryUserArgs = {
  _id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String']['output'];
  email: Scalars['String']['output'];
};

export type CreateUserMutationVariables = Exact<{
  createUserData: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', _id: string, email: string } };

export type BookmarksQueryVariables = Exact<{ [key: string]: never; }>;


export type BookmarksQuery = { __typename?: 'Query', bookmarks: Array<{ __typename?: 'Bookmark', _id: string, name: string, userId: string, links: Array<string> }> };

export type CreateBookmarkMutationVariables = Exact<{
  createBookmarkData: CreateBookmarkInput;
}>;


export type CreateBookmarkMutation = { __typename?: 'Mutation', createBookmark: { __typename?: 'Bookmark', _id: string, name: string, userId: string } };

export const CreateUserDocument = gql`
    mutation CreateUser($createUserData: CreateUserInput!) {
  createUser(createUserData: $createUserData) {
    _id
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BookmarksDocument = gql`
    query bookmarks {
  bookmarks {
    _id
    name
    userId
    links
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BookmarksGQL extends Apollo.Query<BookmarksQuery, BookmarksQueryVariables> {
    document = BookmarksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateBookmarkDocument = gql`
    mutation createBookmark($createBookmarkData: CreateBookmarkInput!) {
  createBookmark(createBookmarkData: $createBookmarkData) {
    _id
    name
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateBookmarkGQL extends Apollo.Mutation<CreateBookmarkMutation, CreateBookmarkMutationVariables> {
    document = CreateBookmarkDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }