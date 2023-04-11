/**
 * @fileoverview gRPC-Web generated client stub for gaintain
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.12
// source: exercise.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as exercise_pb from './exercise_pb';


export class ExerciseServiceClient {
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

  methodDescriptorListExercises = new grpcWeb.MethodDescriptor(
    '/gaintain.ExerciseService/ListExercises',
    grpcWeb.MethodType.UNARY,
    exercise_pb.ExercisesRequest,
    exercise_pb.Exercises,
    (request: exercise_pb.ExercisesRequest) => {
      return request.serializeBinary();
    },
    exercise_pb.Exercises.deserializeBinary
  );

  listExercises(
    request: exercise_pb.ExercisesRequest,
    metadata: grpcWeb.Metadata | null): Promise<exercise_pb.Exercises>;

  listExercises(
    request: exercise_pb.ExercisesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercises) => void): grpcWeb.ClientReadableStream<exercise_pb.Exercises>;

  listExercises(
    request: exercise_pb.ExercisesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercises) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.ExerciseService/ListExercises',
        request,
        metadata || {},
        this.methodDescriptorListExercises,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.ExerciseService/ListExercises',
    request,
    metadata || {},
    this.methodDescriptorListExercises);
  }

  methodDescriptorCreateExercise = new grpcWeb.MethodDescriptor(
    '/gaintain.ExerciseService/CreateExercise',
    grpcWeb.MethodType.UNARY,
    exercise_pb.NewExercise,
    exercise_pb.Exercise,
    (request: exercise_pb.NewExercise) => {
      return request.serializeBinary();
    },
    exercise_pb.Exercise.deserializeBinary
  );

  createExercise(
    request: exercise_pb.NewExercise,
    metadata: grpcWeb.Metadata | null): Promise<exercise_pb.Exercise>;

  createExercise(
    request: exercise_pb.NewExercise,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void): grpcWeb.ClientReadableStream<exercise_pb.Exercise>;

  createExercise(
    request: exercise_pb.NewExercise,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.ExerciseService/CreateExercise',
        request,
        metadata || {},
        this.methodDescriptorCreateExercise,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.ExerciseService/CreateExercise',
    request,
    metadata || {},
    this.methodDescriptorCreateExercise);
  }

  methodDescriptorGetExercise = new grpcWeb.MethodDescriptor(
    '/gaintain.ExerciseService/GetExercise',
    grpcWeb.MethodType.UNARY,
    exercise_pb.ExerciseRequest,
    exercise_pb.Exercise,
    (request: exercise_pb.ExerciseRequest) => {
      return request.serializeBinary();
    },
    exercise_pb.Exercise.deserializeBinary
  );

  getExercise(
    request: exercise_pb.ExerciseRequest,
    metadata: grpcWeb.Metadata | null): Promise<exercise_pb.Exercise>;

  getExercise(
    request: exercise_pb.ExerciseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void): grpcWeb.ClientReadableStream<exercise_pb.Exercise>;

  getExercise(
    request: exercise_pb.ExerciseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.ExerciseService/GetExercise',
        request,
        metadata || {},
        this.methodDescriptorGetExercise,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.ExerciseService/GetExercise',
    request,
    metadata || {},
    this.methodDescriptorGetExercise);
  }

  methodDescriptorUpdateExercise = new grpcWeb.MethodDescriptor(
    '/gaintain.ExerciseService/UpdateExercise',
    grpcWeb.MethodType.UNARY,
    exercise_pb.Exercise,
    exercise_pb.Exercise,
    (request: exercise_pb.Exercise) => {
      return request.serializeBinary();
    },
    exercise_pb.Exercise.deserializeBinary
  );

  updateExercise(
    request: exercise_pb.Exercise,
    metadata: grpcWeb.Metadata | null): Promise<exercise_pb.Exercise>;

  updateExercise(
    request: exercise_pb.Exercise,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void): grpcWeb.ClientReadableStream<exercise_pb.Exercise>;

  updateExercise(
    request: exercise_pb.Exercise,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.ExerciseService/UpdateExercise',
        request,
        metadata || {},
        this.methodDescriptorUpdateExercise,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.ExerciseService/UpdateExercise',
    request,
    metadata || {},
    this.methodDescriptorUpdateExercise);
  }

  methodDescriptorDeleteExercise = new grpcWeb.MethodDescriptor(
    '/gaintain.ExerciseService/DeleteExercise',
    grpcWeb.MethodType.UNARY,
    exercise_pb.ExerciseRequest,
    exercise_pb.Exercise,
    (request: exercise_pb.ExerciseRequest) => {
      return request.serializeBinary();
    },
    exercise_pb.Exercise.deserializeBinary
  );

  deleteExercise(
    request: exercise_pb.ExerciseRequest,
    metadata: grpcWeb.Metadata | null): Promise<exercise_pb.Exercise>;

  deleteExercise(
    request: exercise_pb.ExerciseRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void): grpcWeb.ClientReadableStream<exercise_pb.Exercise>;

  deleteExercise(
    request: exercise_pb.ExerciseRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: exercise_pb.Exercise) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.ExerciseService/DeleteExercise',
        request,
        metadata || {},
        this.methodDescriptorDeleteExercise,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.ExerciseService/DeleteExercise',
    request,
    metadata || {},
    this.methodDescriptorDeleteExercise);
  }

}
