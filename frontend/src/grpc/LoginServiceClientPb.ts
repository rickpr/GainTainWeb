/**
 * @fileoverview gRPC-Web generated client stub for gaintain
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.25.1
// source: login.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as login_pb from './login_pb';


export class LoginServiceClient {
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

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/gaintain.LoginService/Login',
    grpcWeb.MethodType.UNARY,
    login_pb.LoginRequest,
    login_pb.LoginResponse,
    (request: login_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    login_pb.LoginResponse.deserializeBinary
  );

  login(
    request: login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<login_pb.LoginResponse>;

  login(
    request: login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: login_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<login_pb.LoginResponse>;

  login(
    request: login_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: login_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gaintain.LoginService/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gaintain.LoginService/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

}

