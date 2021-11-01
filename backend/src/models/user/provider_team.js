import { Sequelize, DataTypes } from '../database.js';

const ProviderTeam = Sequelize.define(
  'provider_team',
  {
    provider_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'provider',
        key: 'provider_id',
      },
    },
    team_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'team',
        key: 'team_id',
      },
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByProviderId(provider_id) {
  return ProviderTeam.findOne({
    where: { provider_id },
  });
}

async function getByTeamId(team_id) {
  return ProviderTeam.findOne({
    where: { team_id },
  });
}

async function create(
  provider_id, //
  team_id,
) {
  return ProviderTeam.create({
    provider_id,
    team_id,
  }).then(data =>
    this.getByProviderTeamId(
      data.dataValues.provider_id,
      data.dataValues.team_id,
    ),
  );
}

async function remove(provider_id, team_id) {
  return ProviderTeam.getByProviderTeamId(provider_id, team_id).then(
    provider_team => provider_team.destroy(),
  );
}

export default {
  getByProviderId,
  getByTeamId,
  create,
  remove,
};
