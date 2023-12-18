import * as jspb from 'google-protobuf'

import * as set_pb from './set_pb';


export class Superset extends jspb.Message {
  getId(): string;
  setId(value: string): Superset;

  getWorkoutId(): string;
  setWorkoutId(value: string): Superset;

  getPosition(): number;
  setPosition(value: number): Superset;

  getSetsList(): Array<set_pb.Set>;
  setSetsList(value: Array<set_pb.Set>): Superset;
  clearSetsList(): Superset;
  addSets(value?: set_pb.Set, index?: number): set_pb.Set;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Superset.AsObject;
  static toObject(includeInstance: boolean, msg: Superset): Superset.AsObject;
  static serializeBinaryToWriter(message: Superset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Superset;
  static deserializeBinaryFromReader(message: Superset, reader: jspb.BinaryReader): Superset;
}

export namespace Superset {
  export type AsObject = {
    id: string,
    workoutId: string,
    position: number,
    setsList: Array<set_pb.Set.AsObject>,
  }
}

export class NewSuperset extends jspb.Message {
  getWorkoutId(): string;
  setWorkoutId(value: string): NewSuperset;

  getPosition(): number;
  setPosition(value: number): NewSuperset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewSuperset.AsObject;
  static toObject(includeInstance: boolean, msg: NewSuperset): NewSuperset.AsObject;
  static serializeBinaryToWriter(message: NewSuperset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewSuperset;
  static deserializeBinaryFromReader(message: NewSuperset, reader: jspb.BinaryReader): NewSuperset;
}

export namespace NewSuperset {
  export type AsObject = {
    workoutId: string,
    position: number,
  }
}

export class Supersets extends jspb.Message {
  getSupersetsList(): Array<Superset>;
  setSupersetsList(value: Array<Superset>): Supersets;
  clearSupersetsList(): Supersets;
  addSupersets(value?: Superset, index?: number): Superset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Supersets.AsObject;
  static toObject(includeInstance: boolean, msg: Supersets): Supersets.AsObject;
  static serializeBinaryToWriter(message: Supersets, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Supersets;
  static deserializeBinaryFromReader(message: Supersets, reader: jspb.BinaryReader): Supersets;
}

export namespace Supersets {
  export type AsObject = {
    supersetsList: Array<Superset.AsObject>,
  }
}

export class SupersetsRequest extends jspb.Message {
  getWorkoutId(): string;
  setWorkoutId(value: string): SupersetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupersetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SupersetsRequest): SupersetsRequest.AsObject;
  static serializeBinaryToWriter(message: SupersetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupersetsRequest;
  static deserializeBinaryFromReader(message: SupersetsRequest, reader: jspb.BinaryReader): SupersetsRequest;
}

export namespace SupersetsRequest {
  export type AsObject = {
    workoutId: string,
  }
}

export class SupersetRequest extends jspb.Message {
  getId(): string;
  setId(value: string): SupersetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupersetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SupersetRequest): SupersetRequest.AsObject;
  static serializeBinaryToWriter(message: SupersetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupersetRequest;
  static deserializeBinaryFromReader(message: SupersetRequest, reader: jspb.BinaryReader): SupersetRequest;
}

export namespace SupersetRequest {
  export type AsObject = {
    id: string,
  }
}

