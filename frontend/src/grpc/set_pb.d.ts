import * as jspb from 'google-protobuf'



export class Set extends jspb.Message {
  getId(): string;
  setId(value: string): Set;

  getExerciseId(): string;
  setExerciseId(value: string): Set;

  getSupersetId(): string;
  setSupersetId(value: string): Set;

  getReps(): number;
  setReps(value: number): Set;

  getPosition(): number;
  setPosition(value: number): Set;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Set.AsObject;
  static toObject(includeInstance: boolean, msg: Set): Set.AsObject;
  static serializeBinaryToWriter(message: Set, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Set;
  static deserializeBinaryFromReader(message: Set, reader: jspb.BinaryReader): Set;
}

export namespace Set {
  export type AsObject = {
    id: string,
    exerciseId: string,
    supersetId: string,
    reps: number,
    position: number,
  }
}

export class NewSet extends jspb.Message {
  getExerciseId(): string;
  setExerciseId(value: string): NewSet;

  getSupersetId(): string;
  setSupersetId(value: string): NewSet;

  getReps(): number;
  setReps(value: number): NewSet;

  getPosition(): number;
  setPosition(value: number): NewSet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewSet.AsObject;
  static toObject(includeInstance: boolean, msg: NewSet): NewSet.AsObject;
  static serializeBinaryToWriter(message: NewSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewSet;
  static deserializeBinaryFromReader(message: NewSet, reader: jspb.BinaryReader): NewSet;
}

export namespace NewSet {
  export type AsObject = {
    exerciseId: string,
    supersetId: string,
    reps: number,
    position: number,
  }
}

export class Sets extends jspb.Message {
  getSetsList(): Array<Set>;
  setSetsList(value: Array<Set>): Sets;
  clearSetsList(): Sets;
  addSets(value?: Set, index?: number): Set;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sets.AsObject;
  static toObject(includeInstance: boolean, msg: Sets): Sets.AsObject;
  static serializeBinaryToWriter(message: Sets, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sets;
  static deserializeBinaryFromReader(message: Sets, reader: jspb.BinaryReader): Sets;
}

export namespace Sets {
  export type AsObject = {
    setsList: Array<Set.AsObject>,
  }
}

export class SetsRequest extends jspb.Message {
  getSupersetId(): string;
  setSupersetId(value: string): SetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetsRequest): SetsRequest.AsObject;
  static serializeBinaryToWriter(message: SetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetsRequest;
  static deserializeBinaryFromReader(message: SetsRequest, reader: jspb.BinaryReader): SetsRequest;
}

export namespace SetsRequest {
  export type AsObject = {
    supersetId: string,
  }
}

export class SetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): SetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetRequest): SetRequest.AsObject;
  static serializeBinaryToWriter(message: SetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRequest;
  static deserializeBinaryFromReader(message: SetRequest, reader: jspb.BinaryReader): SetRequest;
}

export namespace SetRequest {
  export type AsObject = {
    id: string,
  }
}

