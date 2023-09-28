import * as React from 'react';
import Musical from './Musical.svg';
import HeartOutline from './Heart-outline.svg';
import Add from './Add.svg';
import Arrow from './Arrow.svg';
import ArrowOutline from './Arrow-outline.svg';
import Bookmark from './Bookmark.svg';
import BookmarkOutline from './Bookmark-outline.svg';
import Chat from './Chat.svg';
import ChatOutline from './Chat-outline.svg';
import Heart from './Heart.svg';
import Checkmark from './Checkmark.svg';

export const AddIcon = (props: any) => <Add {...props} />;
export const ArrowIcon = (props: any) => <Arrow {...props} />;
export const ArrowOutlineIcon = (props: any) => <ArrowOutline {...props} />;
export const BookmarkIcon = (props: any) => <Bookmark {...props} />;
export const BookmarkOutlineIcon = (props: any) => (
  <BookmarkOutline {...props} />
);
export const ChatIcon = (props: any) => <Chat {...props} />;
export const ChatOutlineIcon = (props: any) => <ChatOutline {...props} />;
export const HeartIcon = (props: any) => <Heart {...props} />;
export const HeartOutlineIcon = (props: any) => <HeartOutline {...props} />;
export const CheckmarkIcon = (props: any) => <Checkmark {...props} />;
export const MusicalIcon = (props: any) => <Musical {...props} />;
