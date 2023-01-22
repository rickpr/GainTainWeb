/**
 * @fileoverview gRPC-Web generated client stub for gaintain
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
// source: workout.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as workout_pb from './workout_pb';


export class WorkoutServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorListWorkouts = new grpcWeb.MethodDescriptor(
    '/gaintain.WorkoutService/ListWorkouts',
    grpcWeb.MethodType.UNARY,
    workout_pb.WorkoutsRequest,
    workout_pb.Workouts,
    (request: workout_pb.WorkoutsRequest) => {
      return request.serializeBinary();
    },
    workout_pb.Workouts.deserializeBinary
  );

  listWorkouts(
    request: workout_pb.WorkoutsRequest,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.Workouts>;

  listWorkouts(
    request: workout_pb.WorkoutsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.Workouts) => void): grpcWeb.ClientReadableStream<workout_pb.Workouts>;

  listWorkouts(
    request: workout_pb.WorkoutsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.Workouts) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.WorkoutService/ListWorkouts',
        request,
        metadata || {},
        this.methodDescriptorListWorkouts,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.WorkoutService/ListWorkouts',
    request,
    metadata || {},
    this.methodDescriptorListWorkouts);
  }

  methodDescriptorCreateWorkout = new grpcWeb.MethodDescriptor(
    '/gaintain.WorkoutService/CreateWorkout',
    grpcWeb.MethodType.UNARY,
    workout_pb.NewWorkout,
    workout_pb.Workout,
    (request: workout_pb.NewWorkout) => {
      return request.serializeBinary();
    },
    workout_pb.Workout.deserializeBinary
  );

  createWorkout(
    request: workout_pb.NewWorkout,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.Workout>;

  createWorkout(
    request: workout_pb.NewWorkout,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void): grpcWeb.ClientReadableStream<workout_pb.Workout>;

  createWorkout(
    request: workout_pb.NewWorkout,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.WorkoutService/CreateWorkout',
        request,
        metadata || {},
        this.methodDescriptorCreateWorkout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.WorkoutService/CreateWorkout',
    request,
    metadata || {},
    this.methodDescriptorCreateWorkout);
  }

  methodDescriptorGetWorkout = new grpcWeb.MethodDescriptor(
    '/gaintain.WorkoutService/GetWorkout',
    grpcWeb.MethodType.UNARY,
    workout_pb.WorkoutRequest,
    workout_pb.Workout,
    (request: workout_pb.WorkoutRequest) => {
      return request.serializeBinary();
    },
    workout_pb.Workout.deserializeBinary
  );

  getWorkout(
    request: workout_pb.WorkoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.Workout>;

  getWorkout(
    request: workout_pb.WorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void): grpcWeb.ClientReadableStream<workout_pb.Workout>;

  getWorkout(
    request: workout_pb.WorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.WorkoutService/GetWorkout',
        request,
        metadata || {},
        this.methodDescriptorGetWorkout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.WorkoutService/GetWorkout',
    request,
    metadata || {},
    this.methodDescriptorGetWorkout);
  }

  methodDescriptorUpdateWorkout = new grpcWeb.MethodDescriptor(
    '/gaintain.WorkoutService/UpdateWorkout',
    grpcWeb.MethodType.UNARY,
    workout_pb.Workout,
    workout_pb.Workout,
    (request: workout_pb.Workout) => {
      return request.serializeBinary();
    },
    workout_pb.Workout.deserializeBinary
  );

  updateWorkout(
    request: workout_pb.Workout,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.Workout>;

  updateWorkout(
    request: workout_pb.Workout,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void): grpcWeb.ClientReadableStream<workout_pb.Workout>;

  updateWorkout(
    request: workout_pb.Workout,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.WorkoutService/UpdateWorkout',
        request,
        metadata || {},
        this.methodDescriptorUpdateWorkout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.WorkoutService/UpdateWorkout',
    request,
    metadata || {},
    this.methodDescriptorUpdateWorkout);
  }

  methodDescriptorDeleteWorkout = new grpcWeb.MethodDescriptor(
    '/gaintain.WorkoutService/DeleteWorkout',
    grpcWeb.MethodType.UNARY,
    workout_pb.WorkoutRequest,
    workout_pb.Workout,
    (request: workout_pb.WorkoutRequest) => {
      return request.serializeBinary();
    },
    workout_pb.Workout.deserializeBinary
  );

  deleteWorkout(
    request: workout_pb.WorkoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<workout_pb.Workout>;

  deleteWorkout(
    request: workout_pb.WorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void): grpcWeb.ClientReadableStream<workout_pb.Workout>;

  deleteWorkout(
    request: workout_pb.WorkoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: workout_pb.Workout) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.WorkoutService/DeleteWorkout',
        request,
        metadata || {},
        this.methodDescriptorDeleteWorkout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.WorkoutService/DeleteWorkout',
    request,
    metadata || {},
    this.methodDescriptorDeleteWorkout);
  }

}

