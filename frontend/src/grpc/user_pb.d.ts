import * as jspb from 'google-protobuf'



export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  getEmail(): string;
  setEmail(value: string): User;

  getName(): string;
  setName(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
    email: string,
    name: string,
  }
}

export class NewUser extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): NewUser;

  getName(): string;
  setName(value: string): NewUser;

  getPassword(): string;
  setPassword(value: string): NewUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewUser.AsObject;
  static toObject(includeInstance: boolean, msg: NewUser): NewUser.AsObject;
  static serializeBinaryToWriter(message: NewUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewUser;
  static deserializeBinaryFromReader(message: NewUser, reader: jspb.BinaryReader): NewUser;
}

export namespace NewUser {
  export type AsObject = {
    email: string,
    name: string,
    password: string,
  }
}

export class ModifyUser extends jspb.Message {
  getId(): string;
  setId(value: string): ModifyUser;

  getEmail(): string;
  setEmail(value: string): ModifyUser;

  getName(): string;
  setName(value: string): ModifyUser;

  getPassword(): string;
  setPassword(value: string): ModifyUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyUser.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyUser): ModifyUser.AsObject;
  static serializeBinaryToWriter(message: ModifyUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyUser;
  static deserializeBinaryFromReader(message: ModifyUser, reader: jspb.BinaryReader): ModifyUser;
}

export namespace ModifyUser {
  export type AsObject = {
    id: string,
    email: string,
    name: string,
    password: string,
  }
}

export class Users extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): Users;
  clearUsersList(): Users;
  addUsers(value?: User, index?: number): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Users.AsObject;
  static toObject(includeInstance: boolean, msg: Users): Users.AsObject;
  static serializeBinaryToWriter(message: Users, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Users;
  static deserializeBinaryFromReader(message: Users, reader: jspb.BinaryReader): Users;
}

export namespace Users {
  export type AsObject = {
    usersList: Array<User.AsObject>,
  }
}

export class UsersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsersRequest): UsersRequest.AsObject;
  static serializeBinaryToWriter(message: UsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersRequest;
  static deserializeBinaryFromReader(message: UsersRequest, reader: jspb.BinaryReader): UsersRequest;
}

export namespace UsersRequest {
  export type AsObject = {
  }
}

export class UserRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    id: string,
  }
}

