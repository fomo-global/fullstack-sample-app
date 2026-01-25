import { User } from '@/shared/models/User.models';

type TelegramProfile = {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo_url?: string;
};

export async function findOrCreateByTelegramId(profile: TelegramProfile) {
  const { id, username, first_name, last_name, photo_url } = profile;

  const user = await User.findOne({ where: { telegramId: id } });

  if (!user) {
    return User.create({
      telegramId: id,
      username: username,
      firstName: first_name,
      lastName: last_name,
      photoUrl: photo_url,
    });
  }

  await user.update({
    username: username,
    firstName: first_name,
    lastName: last_name,
    photoUrl: photo_url,
  });

  return user;
}
