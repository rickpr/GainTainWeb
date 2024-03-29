// source: set.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var exercise_pb = require('./exercise_pb.js');
goog.object.extend(proto, exercise_pb);
goog.exportSymbol('proto.gaintain.NewSet', null, global);
goog.exportSymbol('proto.gaintain.Set', null, global);
goog.exportSymbol('proto.gaintain.SetRequest', null, global);
goog.exportSymbol('proto.gaintain.Sets', null, global);
goog.exportSymbol('proto.gaintain.SetsRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gaintain.Set = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gaintain.Set, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gaintain.Set.displayName = 'proto.gaintain.Set';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gaintain.NewSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gaintain.NewSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gaintain.NewSet.displayName = 'proto.gaintain.NewSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gaintain.Sets = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.gaintain.Sets.repeatedFields_, null);
};
goog.inherits(proto.gaintain.Sets, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gaintain.Sets.displayName = 'proto.gaintain.Sets';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gaintain.SetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gaintain.SetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gaintain.SetsRequest.displayName = 'proto.gaintain.SetsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.gaintain.SetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.gaintain.SetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.gaintain.SetRequest.displayName = 'proto.gaintain.SetRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gaintain.Set.prototype.toObject = function(opt_includeInstance) {
  return proto.gaintain.Set.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gaintain.Set} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.Set.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    supersetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reps: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: jspb.Message.getFieldWithDefault(msg, 4, 0),
    exercise: (f = msg.getExercise()) && exercise_pb.Exercise.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gaintain.Set}
 */
proto.gaintain.Set.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gaintain.Set;
  return proto.gaintain.Set.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gaintain.Set} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gaintain.Set}
 */
proto.gaintain.Set.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupersetId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReps(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    case 5:
      var value = new exercise_pb.Exercise;
      reader.readMessage(value,exercise_pb.Exercise.deserializeBinaryFromReader);
      msg.setExercise(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gaintain.Set.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gaintain.Set.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gaintain.Set} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.Set.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSupersetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReps();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getExercise();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      exercise_pb.Exercise.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.gaintain.Set.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gaintain.Set} returns this
 */
proto.gaintain.Set.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string superset_id = 2;
 * @return {string}
 */
proto.gaintain.Set.prototype.getSupersetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gaintain.Set} returns this
 */
proto.gaintain.Set.prototype.setSupersetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 reps = 3;
 * @return {number}
 */
proto.gaintain.Set.prototype.getReps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.gaintain.Set} returns this
 */
proto.gaintain.Set.prototype.setReps = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 position = 4;
 * @return {number}
 */
proto.gaintain.Set.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.gaintain.Set} returns this
 */
proto.gaintain.Set.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Exercise exercise = 5;
 * @return {?proto.gaintain.Exercise}
 */
proto.gaintain.Set.prototype.getExercise = function() {
  return /** @type{?proto.gaintain.Exercise} */ (
    jspb.Message.getWrapperField(this, exercise_pb.Exercise, 5));
};


/**
 * @param {?proto.gaintain.Exercise|undefined} value
 * @return {!proto.gaintain.Set} returns this
*/
proto.gaintain.Set.prototype.setExercise = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.gaintain.Set} returns this
 */
proto.gaintain.Set.prototype.clearExercise = function() {
  return this.setExercise(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.gaintain.Set.prototype.hasExercise = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gaintain.NewSet.prototype.toObject = function(opt_includeInstance) {
  return proto.gaintain.NewSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gaintain.NewSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.NewSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    exerciseId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    supersetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reps: jspb.Message.getFieldWithDefault(msg, 3, 0),
    position: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gaintain.NewSet}
 */
proto.gaintain.NewSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gaintain.NewSet;
  return proto.gaintain.NewSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gaintain.NewSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gaintain.NewSet}
 */
proto.gaintain.NewSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExerciseId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupersetId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReps(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gaintain.NewSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gaintain.NewSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gaintain.NewSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.NewSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExerciseId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSupersetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReps();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string exercise_id = 1;
 * @return {string}
 */
proto.gaintain.NewSet.prototype.getExerciseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gaintain.NewSet} returns this
 */
proto.gaintain.NewSet.prototype.setExerciseId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string superset_id = 2;
 * @return {string}
 */
proto.gaintain.NewSet.prototype.getSupersetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.gaintain.NewSet} returns this
 */
proto.gaintain.NewSet.prototype.setSupersetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 reps = 3;
 * @return {number}
 */
proto.gaintain.NewSet.prototype.getReps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.gaintain.NewSet} returns this
 */
proto.gaintain.NewSet.prototype.setReps = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 position = 4;
 * @return {number}
 */
proto.gaintain.NewSet.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.gaintain.NewSet} returns this
 */
proto.gaintain.NewSet.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.gaintain.Sets.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gaintain.Sets.prototype.toObject = function(opt_includeInstance) {
  return proto.gaintain.Sets.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gaintain.Sets} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.Sets.toObject = function(includeInstance, msg) {
  var f, obj = {
    setsList: jspb.Message.toObjectList(msg.getSetsList(),
    proto.gaintain.Set.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gaintain.Sets}
 */
proto.gaintain.Sets.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gaintain.Sets;
  return proto.gaintain.Sets.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gaintain.Sets} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gaintain.Sets}
 */
proto.gaintain.Sets.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.gaintain.Set;
      reader.readMessage(value,proto.gaintain.Set.deserializeBinaryFromReader);
      msg.addSets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gaintain.Sets.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gaintain.Sets.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gaintain.Sets} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.Sets.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.gaintain.Set.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Set sets = 1;
 * @return {!Array<!proto.gaintain.Set>}
 */
proto.gaintain.Sets.prototype.getSetsList = function() {
  return /** @type{!Array<!proto.gaintain.Set>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.gaintain.Set, 1));
};


/**
 * @param {!Array<!proto.gaintain.Set>} value
 * @return {!proto.gaintain.Sets} returns this
*/
proto.gaintain.Sets.prototype.setSetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.gaintain.Set=} opt_value
 * @param {number=} opt_index
 * @return {!proto.gaintain.Set}
 */
proto.gaintain.Sets.prototype.addSets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.gaintain.Set, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.gaintain.Sets} returns this
 */
proto.gaintain.Sets.prototype.clearSetsList = function() {
  return this.setSetsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gaintain.SetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gaintain.SetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gaintain.SetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.SetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    supersetId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gaintain.SetsRequest}
 */
proto.gaintain.SetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gaintain.SetsRequest;
  return proto.gaintain.SetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gaintain.SetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gaintain.SetsRequest}
 */
proto.gaintain.SetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSupersetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gaintain.SetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gaintain.SetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gaintain.SetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.SetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSupersetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string superset_id = 1;
 * @return {string}
 */
proto.gaintain.SetsRequest.prototype.getSupersetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gaintain.SetsRequest} returns this
 */
proto.gaintain.SetsRequest.prototype.setSupersetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.gaintain.SetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.gaintain.SetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.gaintain.SetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.SetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.gaintain.SetRequest}
 */
proto.gaintain.SetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.gaintain.SetRequest;
  return proto.gaintain.SetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.gaintain.SetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.gaintain.SetRequest}
 */
proto.gaintain.SetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.gaintain.SetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.gaintain.SetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.gaintain.SetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.gaintain.SetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.gaintain.SetRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.gaintain.SetRequest} returns this
 */
proto.gaintain.SetRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.gaintain);
