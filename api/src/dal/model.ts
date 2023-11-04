import { DataTypes, HasMany, HasOne, Model, Sequelize } from 'sequelize';
import { v4 as uuid } from 'uuid';

const sequelize = new Sequelize('sqlite::memory:');

// export class User extends Model {
//   static CareRequests: HasMany<User, CareRequest>;
// }
//
// User.init(
//   {
//     username: DataTypes.STRING,
//     id: {
//       type: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//   },
//   { sequelize, modelName: 'user' }
// );

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

export class CareRequest extends Model {}

CareRequest.init(
  {
    start: DataTypes.TIME,
    end: DataTypes.TIME,
    carerName: DataTypes.STRING,
    clientName: DataTypes.STRING,
    carerRemarks: DataTypes.STRING,
    clientRemarks: DataTypes.STRING,
    type: DataTypes.ENUM({
      values: ['HOUSEHOLD', 'MEDICAL'],
    }),
    status: DataTypes.ENUM({
      values: ['OPEN', 'CLOSED'],
    }),
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { sequelize, modelName: 'careRequests' }
);
//
// User.CareRequests = User.hasMany(CareRequest);
// const Creator = CareRequest.belongsTo(User, { as: 'creator' });

(async () => {
  await sequelize.sync();

  await CareRequest.create({
    start: Date.parse('01 Jan 2020 00:00:00 GMT'),
    end: Date.parse('02 Jan 2020 00:00:00 GMT'),
    clientName: 'John',
    clientRemarks: 'Need care',
    type: 'HOUSEHOLD',
    status: 'OPEN',
    id: uuid(),
  });
  await CareRequest.create({
    start: Date.parse('01 Jan 2020 00:00:00 GMT'),
    end: Date.parse('02 Jan 2020 00:00:00 GMT'),
    clientName: 'Jane',
    clientRemarks: 'Need care',
    type: 'HOUSEHOLD',
    status: 'OPEN',
    id: uuid(),
  });

  await CareRequest.create({
    start: Date.parse('01 Jan 2020 00:00:00 GMT'),
    end: Date.parse('02 Jan 2020 00:00:00 GMT'),
    clientName: 'Bob',
    clientRemarks: 'Need care',
    type: 'HOUSEHOLD',
    status: 'OPEN',
    id: uuid(),
  });

  await CareRequest.create({
    start: Date.parse('01 Jan 2020 00:00:00 GMT'),
    end: Date.parse('02 Jan 2020 00:00:00 GMT'),
    clientName: 'John',
    carerName: 'Alice',
    clientRemarks: 'Need care',
    type: 'MEDICAL',
    status: 'CLOSED',
    id: uuid(),
  });
})();

(async () => {
  await sequelize.sync();
})();
