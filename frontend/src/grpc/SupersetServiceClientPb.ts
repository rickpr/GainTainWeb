/**
 * @fileoverview gRPC-Web generated client stub for gaintain
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.1
// source: superset.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as superset_pb from './superset_pb';


export class SupersetServiceClient {
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

  methodDescriptorListSupersets = new grpcWeb.MethodDescriptor(
    '/gaintain.SupersetService/ListSupersets',
    grpcWeb.MethodType.UNARY,
    superset_pb.SupersetsRequest,
    superset_pb.Supersets,
    (request: superset_pb.SupersetsRequest) => {
      return request.serializeBinary();
    },
    superset_pb.Supersets.deserializeBinary
  );

  listSupersets(
    request: superset_pb.SupersetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<superset_pb.Supersets>;

  listSupersets(
    request: superset_pb.SupersetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: superset_pb.Supersets) => void): grpcWeb.ClientReadableStream<superset_pb.Supersets>;

  listSupersets(
    request: superset_pb.SupersetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: superset_pb.Supersets) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.SupersetService/ListSupersets',
        request,
        metadata || {},
        this.methodDescriptorListSupersets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.SupersetService/ListSupersets',
    request,
    metadata || {},
    this.methodDescriptorListSupersets);
  }

  methodDescriptorCreateSuperset = new grpcWeb.MethodDescriptor(
    '/gaintain.SupersetService/CreateSuperset',
    grpcWeb.MethodType.UNARY,
    superset_pb.NewSuperset,
    superset_pb.Superset,
    (request: superset_pb.NewSuperset) => {
      return request.serializeBinary();
    },
    superset_pb.Superset.deserializeBinary
  );

  createSuperset(
    request: superset_pb.NewSuperset,
    metadata: grpcWeb.Metadata | null): Promise<superset_pb.Superset>;

  createSuperset(
    request: superset_pb.NewSuperset,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: superset_pb.Superset) => void): grpcWeb.ClientReadableStream<superset_pb.Superset>;

  createSuperset(
    request: superset_pb.NewSuperset,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: superset_pb.Superset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.SupersetService/CreateSuperset',
        request,
        metadata || {},
        this.methodDescriptorCreateSuperset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.SupersetService/CreateSuperset',
    request,
    metadata || {},
    this.methodDescriptorCreateSuperset);
  }

  methodDescriptorGetSuperset = new grpcWeb.MethodDescriptor(
    '/gaintain.SupersetService/GetSuperset',
    grpcWeb.MethodType.UNARY,
    superset_pb.SupersetRequest,
    superset_pb.Superset,
    (request: superset_pb.SupersetRequest) => {
      return request.serializeBinary();
    },
    superset_pb.Superset.deserializeBinary
  );

  getSuperset(
    request: superset_pb.SupersetRequest,
    metadata: grpcWeb.Metadata | null): Promise<superset_pb.Superset>;

  getSuperset(
    request: superset_pb.SupersetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: superset_pb.Superset) => void): grpcWeb.ClientReadableStream<superset_pb.Superset>;

  getSuperset(
    request: superset_pb.SupersetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: superset_pb.Superset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.SupersetService/GetSuperset',
        request,
        metadata || {},
        this.methodDescriptorGetSuperset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.SupersetService/GetSuperset',
    request,
    metadata || {},
    this.methodDescriptorGetSuperset);
  }

  methodDescriptorUpdateSuperset = new grpcWeb.MethodDescriptor(
    '/gaintain.SupersetService/UpdateSuperset',
    grpcWeb.MethodType.UNARY,
    superset_pb.Superset,
    superset_pb.Superset,
    (request: superset_pb.Superset) => {
      return request.serializeBinary();
    },
    superset_pb.Superset.deserializeBinary
  );

  updateSuperset(
    request: superset_pb.Superset,
    metadata: grpcWeb.Metadata | null): Promise<superset_pb.Superset>;

  updateSuperset(
    request: superset_pb.Superset,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: superset_pb.Superset) => void): grpcWeb.ClientReadableStream<superset_pb.Superset>;

  updateSuperset(
    request: superset_pb.Superset,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: superset_pb.Superset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.SupersetService/UpdateSuperset',
        request,
        metadata || {},
        this.methodDescriptorUpdateSuperset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.SupersetService/UpdateSuperset',
    request,
    metadata || {},
    this.methodDescriptorUpdateSuperset);
  }

  methodDescriptorDeleteSuperset = new grpcWeb.MethodDescriptor(
    '/gaintain.SupersetService/DeleteSuperset',
    grpcWeb.MethodType.UNARY,
    superset_pb.SupersetRequest,
    superset_pb.Superset,
    (request: superset_pb.SupersetRequest) => {
      return request.serializeBinary();
    },
    superset_pb.Superset.deserializeBinary
  );

  deleteSuperset(
    request: superset_pb.SupersetRequest,
    metadata: grpcWeb.Metadata | null): Promise<superset_pb.Superset>;

  deleteSuperset(
    request: superset_pb.SupersetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: superset_pb.Superset) => void): grpcWeb.ClientReadableStream<superset_pb.Superset>;

  deleteSuperset(
    request: superset_pb.SupersetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: superset_pb.Superset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.SupersetService/DeleteSuperset',
        request,
        metadata || {},
        this.methodDescriptorDeleteSuperset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.SupersetService/DeleteSuperset',
    request,
    metadata || {},
    this.methodDescriptorDeleteSuperset);
  }

}

