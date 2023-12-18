import Model from './model.js';
import UserModel from './user.js';
import PhotoLikeModel from './photolikes.js';
import Repository from './repository.js';

export default class PhotoLikes extends Model {
    constructor()
    {
        super();
        this.addField('Id', 'string');
        this.addField('UserId', 'string');
        this.addField('PhotoId', 'string');        

        this.setKey('Id');
    }

    bindExtraData(instance) {
        instance = super.bindExtraData(instance);
        let usersRepository = new Repository(new UserModel());
        let user = usersRepository.get(instance.UserId);
        if (user) {
            instance.UserName = likeUser.Name;
        }

        return instance;
    }
}