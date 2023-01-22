import * as jspb from 'google-protobuf'



export class Exercise extends jspb.Message {
  getId(): string;
  setId(value: string): Exercise;

  getUserId(): string;
  setUserId(value: string): Exercise;

  getName(): string;
  setName(value: string): Exercise;

  getDescription(): string;
  setDescription(value: string): Exercise;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exercise.AsObject;
  static toObject(includeInstance: boolean, msg: Exercise): Exercise.AsObject;
  static serializeBinaryToWriter(message: Exercise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exercise;
  static deserializeBinaryFromReader(message: Exercise, reader: jspb.BinaryReader): Exercise;
}

export namespace Exercise {
  export type AsObject = {
    id: string,
    userId: string,
    name: string,
    description: string,
  }
}

export class NewExercise extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): NewExercise;

  getName(): string;
  setName(value: string): NewExercise;

  getDescription(): string;
  setDescription(value: string): NewExercise;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewExercise.AsObject;
  static toObject(includeInstance: boolean, msg: NewExercise): NewExercise.AsObject;
  static serializeBinaryToWriter(message: NewExercise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewExercise;
  static deserializeBinaryFromReader(message: NewExercise, reader: jspb.BinaryReader): NewExercise;
}

export namespace NewExercise {
  export type AsObject = {
    userId: string,
    name: string,
    description: string,
  }
}

export class Exercises extends jspb.Message {
  getExercisesList(): Array<Exercise>;
  setExercisesList(value: Array<Exercise>): Exercises;
  clearExercisesList(): Exercises;
  addExercises(value?: Exercise, index?: number): Exercise;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exercises.AsObject;
  static toObject(includeInstance: boolean, msg: Exercises): Exercises.AsObject;
  static serializeBinaryToWriter(message: Exercises, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exercises;
  static deserializeBinaryFromReader(message: Exercises, reader: jspb.BinaryReader): Exercises;
}

export namespace Exercises {
  export type AsObject = {
    exercisesList: Array<Exercise.AsObject>,
  }
}

export class ExercisesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExercisesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExercisesRequest): ExercisesRequest.AsObject;
  static serializeBinaryToWriter(message: ExercisesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExercisesRequest;
  static deserializeBinaryFromReader(message: ExercisesRequest, reader: jspb.BinaryReader): ExercisesRequest;
}

export namespace ExercisesRequest {
  export type AsObject = {
  }
}

export class ExerciseRequest extends jspb.Message {
  getId(): string;
  setId(value: string): ExerciseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExerciseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExerciseRequest): ExerciseRequest.AsObject;
  static serializeBinaryToWriter(message: ExerciseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExerciseRequest;
  static deserializeBinaryFromReader(message: ExerciseRequest, reader: jspb.BinaryReader): ExerciseRequest;
}

export namespace ExerciseRequest {
  export type AsObject = {
    id: string,
  }
}

