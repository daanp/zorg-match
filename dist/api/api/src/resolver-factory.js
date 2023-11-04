var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var resolver_factory_exports = {};
__export(resolver_factory_exports, {
  ResolverFactory: () => ResolverFactory
});
module.exports = __toCommonJS(resolver_factory_exports);
var import_resolvers = require("./resolvers");
class ResolverFactory {
  getResolvers() {
    return {
      Query: {
        users: import_resolvers.usersResolver
      },
      Mutation: {}
    };
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ResolverFactory
});
//# sourceMappingURL=resolver-factory.js.map
