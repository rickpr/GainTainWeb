import * as jspb from 'google-protobuf'



export class Workout extends jspb.Message {
  getId(): string;
  setId(value: string): Workout;

  getUserId(): string;
  setUserId(value: string): Workout;

  getName(): string;
  setName(value: string): Workout;

  getDescription(): string;
  setDescription(value: string): Workout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Workout.AsObject;
  static toObject(includeInstance: boolean, msg: Workout): Workout.AsObject;
  static serializeBinaryToWriter(message: Workout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workout;
  static deserializeBinaryFromReader(message: Workout, reader: jspb.BinaryReader): Workout;
}

export namespace Workout {
  export type AsObject = {
    id: string,
    userId: string,
    name: string,
    description: string,
  }
}

export class NewWorkout extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): NewWorkout;

  getName(): string;
  setName(value: string): NewWorkout;

  getDescription(): string;
  setDescription(value: string): NewWorkout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewWorkout.AsObject;
  static toObject(includeInstance: boolean, msg: NewWorkout): NewWorkout.AsObject;
  static serializeBinaryToWriter(message: NewWorkout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewWorkout;
  static deserializeBinaryFromReader(message: NewWorkout, reader: jspb.BinaryReader): NewWorkout;
}

export namespace NewWorkout {
  export type AsObject = {
    userId: string,
    name: string,
    description: string,
  }
}

export class Workouts extends jspb.Message {
  getWorkoutsList(): Array<Workout>;
  setWorkoutsList(value: Array<Workout>): Workouts;
  clearWorkoutsList(): Workouts;
  addWorkouts(value?: Workout, index?: number): Workout;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Workouts.AsObject;
  static toObject(includeInstance: boolean, msg: Workouts): Workouts.AsObject;
  static serializeBinaryToWriter(message: Workouts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Workouts;
  static deserializeBinaryFromReader(message: Workouts, reader: jspb.BinaryReader): Workouts;
}

export namespace Workouts {
  export type AsObject = {
    workoutsList: Array<Workout.AsObject>,
  }
}

export class WorkoutsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkoutsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WorkoutsRequest): WorkoutsRequest.AsObject;
  static serializeBinaryToWriter(message: WorkoutsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkoutsRequest;
  static deserializeBinaryFromReader(message: WorkoutsRequest, reader: jspb.BinaryReader): WorkoutsRequest;
}

export namespace WorkoutsRequest {
  export type AsObject = {
  }
}

export class WorkoutRequest extends jspb.Message {
  getId(): string;
  setId(value: string): WorkoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WorkoutRequest): WorkoutRequest.AsObject;
  static serializeBinaryToWriter(message: WorkoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkoutRequest;
  static deserializeBinaryFromReader(message: WorkoutRequest, reader: jspb.BinaryReader): WorkoutRequest;
}

export namespace WorkoutRequest {
  export type AsObject = {
    id: string,
  }
}

