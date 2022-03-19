import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system using the format 1970-01-01T00:00:00Z */
  OffsetDateTime: any;
};

export enum ChannelId {
  General = 'General',
  Lgtm = 'LGTM',
  Technology = 'Technology'
}

export type Message = {
  __typename?: 'Message';
  datetime: Scalars['OffsetDateTime'];
  messageId: Scalars['String'];
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type MessageEnum = {
  __typename?: 'MessageEnum';
  datetime: Scalars['OffsetDateTime'];
  messageId: Scalars['String'];
  text: Scalars['String'];
  userId: UserId;
};

export type Mutations = {
  __typename?: 'Mutations';
  /**
   *
   *   Post `messages`. return posted datetime when it succeeded
   *
   *   Code|Error
   *   ---|---
   *   500|`Couldn't save message, please retry.`
   *
   */
  MessagePost?: Maybe<MessageEnum>;
  /**
   *
   *   Post `messages`. return posted datetime when it succeeded
   *
   *   - `channelId` should be "1" or "2" or "3"
   *   - `userId` should be "Sam", "Russell", "Joyse"
   *
   *   Code|Error
   *   ---|---
   *   400|`Channel not found`
   *   500|`Couldn't save message, please retry.`
   *
   */
  postMessage?: Maybe<Message>;
};


export type MutationsMessagePostArgs = {
  channelId: ChannelId;
  text: Scalars['String'];
  userId: UserId;
};


export type MutationsPostMessageArgs = {
  channelId: Scalars['String'];
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type Queries = {
  __typename?: 'Queries';
  /**
   *
   *   get latest `messages`
   *
   *   - `message` length is at most 10
   *
   *   Code|Error
   *   ---|---
   *
   */
  MessagesFetchLatest?: Maybe<Array<MessageEnum>>;
  /**
   *
   *   Get more `messages`.
   *
   *   - if `old` = true, you can fetch older messages than messageId
   *   - if `old` = false, you can fetch newer messages than messageId
   *   - `message` length is at most 10
   *
   *   Code|Error
   *   ---|---
   *   400|`Message not found`
   *
   */
  MessagesFetchMore?: Maybe<Array<MessageEnum>>;
  /**
   *
   *   get latest `messages`
   *
   *   - `channelId` should be "1" or "2" or "3"
   *   - `message` length is at most 10
   *
   *   Code|Error
   *   ---|---
   *   400|`Channel not found`
   *
   */
  fetchLatestMessages?: Maybe<Array<Message>>;
  /**
   *
   *   Get more `messages`.
   *
   *   - if `old` = true, you can fetch older messages than messageId
   *   - if `old` = false, you can fetch newer messages than messageId
   *   - `message` length is at most 10
   *
   *   Code|Error
   *   ---|---
   *   400|`Channel not found`
   *   400|`Message not found`
   *
   */
  fetchMoreMessages?: Maybe<Array<Message>>;
};


export type QueriesMessagesFetchLatestArgs = {
  channelId: ChannelId;
};


export type QueriesMessagesFetchMoreArgs = {
  channelId: ChannelId;
  messageId: Scalars['String'];
  old: Scalars['Boolean'];
};


export type QueriesFetchLatestMessagesArgs = {
  channelId: Scalars['String'];
};


export type QueriesFetchMoreMessagesArgs = {
  channelId: Scalars['String'];
  messageId: Scalars['String'];
  old: Scalars['Boolean'];
};

export enum UserId {
  Joyse = 'Joyse',
  Russell = 'Russell',
  Sam = 'Sam'
}

export type FetchLatestMessagesQueryVariables = Exact<{
  channelId: Scalars['String'];
}>;


export type FetchLatestMessagesQuery = { __typename?: 'Queries', fetchLatestMessages?: Array<{ __typename?: 'Message', messageId: string, text: string, datetime: any, userId: string }> | null };

export type FetchMoreMessagesQueryVariables = Exact<{
  channelId: Scalars['String'];
  messageId: Scalars['String'];
  old: Scalars['Boolean'];
}>;


export type FetchMoreMessagesQuery = { __typename?: 'Queries', fetchMoreMessages?: Array<{ __typename?: 'Message', messageId: string, text: string, datetime: any, userId: string }> | null };

export type PostMessageMutationVariables = Exact<{
  text: Scalars['String'];
  userId: Scalars['String'];
  channelId: Scalars['String'];
}>;


export type PostMessageMutation = { __typename?: 'Mutations', postMessage?: { __typename?: 'Message', messageId: string, text: string, datetime: any, userId: string } | null };

export const FetchLatestMessagesDocument = gql`
    query fetchLatestMessages($channelId: String!) {
  fetchLatestMessages(channelId: $channelId) {
    messageId
    text
    datetime
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchLatestMessagesGQL extends Apollo.Query<FetchLatestMessagesQuery, FetchLatestMessagesQueryVariables> {
    override document = FetchLatestMessagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FetchMoreMessagesDocument = gql`
    query fetchMoreMessages($channelId: String!, $messageId: String!, $old: Boolean!) {
  fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
    messageId
    text
    datetime
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FetchMoreMessagesGQL extends Apollo.Query<FetchMoreMessagesQuery, FetchMoreMessagesQueryVariables> {
    override document = FetchMoreMessagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PostMessageDocument = gql`
    mutation postMessage($text: String!, $userId: String!, $channelId: String!) {
  postMessage(text: $text, channelId: $channelId, userId: $userId) {
    messageId
    text
    datetime
    userId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PostMessageGQL extends Apollo.Mutation<PostMessageMutation, PostMessageMutationVariables> {
    override document = PostMessageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }