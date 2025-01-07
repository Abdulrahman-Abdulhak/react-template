class UnimplementedError extends Error {
  constructor(message = "") {
    super("Unimplemented Error." + (message.length > 0 ? " " + message : ""));
  }
}

export default UnimplementedError;
