import { ProviderModel, ProviderTeamModel } from '../../models/index.js';
import { TeamService, ImageService } from '../index.js';
import ApiError from '../../modules/error.js';

/* Provider (PK) */

async function getByProviderId(provider_id) {
  const provider = await ProviderModel.getByProviderId(provider_id);

  if (!provider) throw new ApiError(404, `Provider not found: ${provider_id}`);

  return provider;
}

async function create(
  id, //
  password,
  nickname,
  imagefile,
  oauth_token,
  access_token,
) {
  let image_id = null;

  if (imagefile) {
    const image = await ImageService.create(
      imagefile.file_name, //
      imagefile.file_path,
      imagefile.file_type,
      imagefile.file_size,
    );
    image_id = image.image_id;
  }

  const provider = await ProviderModel.create(
    id, //
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  ).catch(async err => {
    if (image_id) await ImageService.removeByImageId(image_id);

    throw new ApiError(406, 'DB ERROR: ' + err);
  });

  return provider;
}

async function update(
  provider_id, //
  id,
  password,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  await getByProviderId(provider_id);

  const updated = await ProviderModel.update(
    provider_id, //
    id,
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  return updated;
}

async function removeByProviderId(provider_id) {
  const provider = await getByProviderId(provider_id);

  await ImageService.removeByImageId(provider.image_id);
  await ProviderTeamModel.removeByProviderId(provider_id);
  await ProviderModel.remove(provider_id);
}

/* Team (Equal FK) */

async function getTeams(provider_id) {
  await getByProviderId(provider_id);

  const teams = await ProviderTeamModel.getByProviderId(provider_id);

  return teams;
}

async function joinTeam(provider_id, team_id) {
  await getByProviderId(provider_id);
  await TeamService.getByTeamId(team_id);

  const join = await ProviderTeamModel.create(provider_id, team_id);

  return join;
}

async function leaveTeam(provider_id, team_id) {
  await getByProviderId(provider_id);
  await TeamService.getByTeamId(team_id);

  await ProviderTeamModel.remove(provider_id, team_id);
}

export default {
  getByProviderId,
  create,
  update,
  removeByProviderId,
  getTeams,
  joinTeam,
  leaveTeam,
};
