import { DataTypes, HasMany, HasOne, Model, Sequelize } from 'sequelize';
import { v4 as uuid } from 'uuid';

const sequelize = new Sequelize('sqlite::memory:');

export class User extends Model {
  static Appointments: HasMany<User, Appointment>;
}

User.init(
  {
    username: DataTypes.STRING,
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { sequelize, modelName: 'user' }
);

// class Schedule extends Model {
//   static Appointments: HasMany<Schedule, Appointment>;
// }
//
// Schedule.init(
//   {
//     id: {
//       type: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//   },
//   { sequelize, modelName: 'schedule' }
// );

export class Appointment extends Model {
  static associate(models) {
    Appointment.belongsTo(models.User, {
      as: 'creator',
      foreignKey: 'creatorId',
    });
  }
}

Appointment.init(
  {
    start: DataTypes.TIME,
    end: DataTypes.TIME,
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { sequelize, modelName: 'appointment' }
);

User.Appointments = User.hasMany(Appointment);
const Creator = Appointment.belongsTo(User, { as: 'creator' });

(async () => {
  await sequelize.sync();
  const janeId = uuid();
  const jane = await User.create({
    username: 'janedoe',
    id: janeId,
  });
  const appointment = await Appointment.create({
    start: Date.parse('01 Jan 2020 00:00:00 GMT'),
    end: Date.parse('02 Jan 2020 00:00:00 GMT'),
    id: uuid(),
    userId: janeId,
  });
})();

(async () => {
  await sequelize.sync();
})();
