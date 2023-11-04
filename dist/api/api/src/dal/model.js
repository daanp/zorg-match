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
var model_exports = {};
__export(model_exports, {
  Appointment: () => Appointment,
  User: () => User
});
module.exports = __toCommonJS(model_exports);
var import_sequelize = require("sequelize");
var import_uuid = require("uuid");
const sequelize = new import_sequelize.Sequelize("sqlite::memory:");
class User extends import_sequelize.Model {
  static Appointments;
}
User.init(
  {
    username: import_sequelize.DataTypes.STRING,
    id: {
      type: import_sequelize.DataTypes.UUIDV4,
      primaryKey: true
    }
  },
  { sequelize, modelName: "user" }
);
class Appointment extends import_sequelize.Model {
  static associate(models) {
    Appointment.belongsTo(models.User, { as: "creator", foreignKey: "creatorId" });
  }
}
Appointment.init(
  {
    start: import_sequelize.DataTypes.TIME,
    end: import_sequelize.DataTypes.TIME,
    id: {
      type: import_sequelize.DataTypes.UUIDV4,
      primaryKey: true
    }
  },
  { sequelize, modelName: "appointment" }
);
User.Appointments = User.hasMany(Appointment);
const Creator = Appointment.belongsTo(User, { as: "creator" });
(async () => {
  await sequelize.sync();
  let janeId = (0, import_uuid.v4)();
  const jane = await User.create({
    username: "janedoe",
    id: janeId
  });
  const appointment = await Appointment.create(
    {
      start: Date.parse("01 Jan 2020 00:00:00 GMT"),
      end: Date.parse("02 Jan 2020 00:00:00 GMT"),
      id: (0, import_uuid.v4)(),
      userId: janeId
    }
  );
})();
(async () => {
  await sequelize.sync();
})();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Appointment,
  User
});
//# sourceMappingURL=model.js.map
